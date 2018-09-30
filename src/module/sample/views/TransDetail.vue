<template>
    <div>

        <div style="position:absolute; top:0px; width:100%;">
            <div style="background-color:#fff; padding:20px 15px 20px; 15px;">
                <span style="font-size:18px">{{workflowTitle}}</span>
                <div>
                    <span style="font-size:14px; color:#606266">{{workflowPerson}}</span>
                    <span style="font-size:12px; margin-left:10px; color:#909399">{{workflowDate}}</span>
                </div>
            </div>
            <tab>
                <tab-item selected @on-item-click="itemTabClick(0)">详情</tab-item>
                <tab-item @on-item-click="itemTabClick(1)">附件</tab-item>
                <tab-item @on-item-click="itemTabClick(2)">流转明细</tab-item>
                <!-- <tab-item @on-item-click="itemTabClick(3)">流转图</tab-item> -->
            </tab>

            <div v-show="!gruopIsHidden">
                <detail-fragment></detail-fragment>

                <group>
                    <x-textarea v-model="textValue" :max="20" placeholder="请输入意见"></x-textarea>
                </group>

                <div style="height:80px"></div>

                <div class="button_container_cls">
                    <div v-for="(item, index) in displayOptionButtonData" :key="index" class="button_item_cls">
                        <x-button v-if="item.op != 'more'" :ref="item.op" :type="item.op == 'agree'? 'primary':'default'" class="button_cls" @click.native="buttonItemClick(item)">
                            {{ processButtonText(item.text) }}
                        </x-button>

                        <x-button v-if="item.op == 'more'" :ref="item.op" type="default" class="button_cls" @click.native="moreItemClick(item)">
                            更多
                        </x-button>

                        <!-- <x-button v-else-if="index == 2" :ref="item.op" :type="item.op == 'agree'? 'primary':'default'" class="button_cls" @click.native="buttonItemClick(item)">
                            {{ processButtonText(item.text) }}
                        </x-button> -->

                    </div>
                </div>
            </div>

            <div v-show="!hDocIsHidden">
                <div v-for="item in docListData" :key="item.title">
                    <h-doc-cell :title="item.title" :image="item.image" :subTitle="item.subTitle"></h-doc-cell>
                    <div v-if="item != docListData[docListData.length - 1]" style="height:1px; background-color:#E7E7E7; margin-left:15px"></div>
                </div>
            </div>

            <h-transinfo v-show="!transIsHidden" :transDataModle="transInfoData"></h-transinfo>
        </div>

        <div v-transfer-dom>
            <popup v-model="mutiButtonShow">
                <div v-for="(item, index) in optionButtonData" :key="index" class="button_item_cls">
                    <x-button :ref="item.op" :type="item.op == 'agree'? 'primary':'default'" class="button_cls" @click.native="buttonItemClick(item)">
                        {{ processButtonText(item.text) }}
                    </x-button>
                </div>
            </popup>
        </div>

    </div>
</template>

<script>
import { HTransinfo, HDocCell } from "hrkj-vux-components";
import {
    Tab,
    TabItem,
    Cell,
    Group,
    XTextarea,
    XButton,
    Popup,
    TransferDom
} from "vux";
import HttpBusinessRequest from "@/module/api/api.js";
import workflowData from "../workflow_data.js";

import DetailFragment from "./DetailFragment.vue";

export default {
    name: "transDetail",
    directives: {
        TransferDom
    },
    data() {
        return {
            docListData: [
                {
                    title: "2018号文件",
                    subTitle: "19.9k",
                    image: "/static/pdf.png"
                },
                {
                    title: "关于年中会议的通知",
                    subTitle: "33.7k",
                    image: "/static/doc.png"
                }
            ],
            transInfoData: [],
            gruopIsHidden: false,
            tabIndex: 0,
            transIsHidden: true,
            hDocIsHidden: true,
            hIframeIsHidden: true,

            workflowTitle: "",
            workflowPerson: "",
            workflowDate: "",
            leftButtonTitle: "",
            leftButtonHidden: true,
            leftButtonData: {},
            rightButtonTitle: "",
            rightButtonHidden: true,
            rightButtonData: {},

            optionButtonData: [],
            displayOptionButtonData: [],

            textValue: "",
            mutiButtonShow: false
        };
    },
    activated() {
        if (typeof MXCommon == "undefined") {
            let _this = this;
            // 初始化 MXCommon
            document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载
            function onDeviceReady() {
                MXSetting &&
                    typeof MXSetting.setConsoleLogEnabled === "function" &&
                    MXSetting.setConsoleLogEnabled();

                _this.setTitle("详情信息");
                let arr = [{ title: "帮助", key: "help", icon: "" }];
                MXWebui.setCustomHeaderMenu(JSON.stringify(arr), result => {
                    // 帮助
                    _this.easyPush("/helpList");
                });
            }
        } else {
            this.setTitle("详情信息");
            let arr = [{ title: "帮助", key: "help", icon: "" }];
            MXWebui.setCustomHeaderMenu(JSON.stringify(arr), result => {
                // 帮助
                this.easyPush("/helpList");
            });
        }

        this.workflowTitle = this.easyGetParams().title;
        this.workflowTodoDetailRequest();
        this.workflowTransferRequest();
    },
    created() {},
    mounted() {},
    deactivated() {
        MXWebui.hideOptionMenu();
    },
    destroyed() {
        MXWebui.hideOptionMenu();
    },
    methods: {
        moreItemClick(data) {
            this.mutiButtonShow = true;
        },
        workflowTodoDetailRequest() {
            var me = this;
            let request = HttpBusinessRequest.workflowTodoDetail();
            request.complete = function() {};
            request.success = (data, status, xhr) => {
                this.analysisTodoDetailData(data);
            };
            request.error = function(data, status, xhr) {};
            // 发送请求
            request.send();
        },
        analysisTodoDetailData(responeData) {
            // this.workflowTitle = responeData.processInstance.title;
            this.workflowPerson =
                responeData.processInstance.startParticipant.name;
            this.workflowDate = responeData.createTime;

            this.setButton(responeData.operations);

            this.evalFunc(responeData.evalFunc);
        },
        setButton(buttonData) {
            this.displayOptionButtonData = []
            this.optionButtonData = buttonData;

            if (buttonData.length > 3) {
                for (let i = 0; i < buttonData.length; i++) {
                    if (i < 2) {
                        this.displayOptionButtonData.push(
                            this.optionButtonData[i]
                        );
                    }
                }
                this.displayOptionButtonData.push({
                    op: "more",
                    text: "更多",
                });
            } else {
                this.displayOptionButtonData = buttonData;
            }
        },
        /**
         * 通过服务端返回，动态执行函数
         *
         */
        evalFunc(func) {
            if (func != "") {
                try {
                    eval("this." + func + "()");
                } catch (error) {}
            }
        },
        toastMessage() {
            this.$vux.toast.text("函数已执行", "middle");
        },

        buttonItemClick(item) {
            this.mutiButtonShow = false;
            console.log(item);
            // TODO: 根据业务不同自行处理

            if (item.op == "agree") {
                this.easyPush("/next");
            }
        },

        workflowTransferRequest() {
            var me = this;
            let request = HttpBusinessRequest.workflowTransfer();
            request.complete = function() {};
            request.success = (data, status, xhr) => {
                this.analysisTransferData(data);
            };
            request.error = function(data, status, xhr) {};
            // 发送请求
            request.send();
        },
        analysisTransferData(responeData) {
            this.transInfoData = responeData;
        },

        itemTabClick(index) {
            switch (index) {
                case 0:
                    this.gruopIsHidden = false;

                    this.transIsHidden = true;
                    this.hDocIsHidden = true;
                    this.hIframeIsHidden = true;

                    break;
                case 1:
                    this.gruopIsHidden = true;

                    this.transIsHidden = true;
                    this.hDocIsHidden = false;
                    this.hIframeIsHidden = true;
                    break;
                case 2:
                    this.gruopIsHidden = true;

                    this.transIsHidden = false;
                    this.hDocIsHidden = true;
                    this.hIframeIsHidden = true;
                    break;
                case 3:
                    // this.gruopIsHidden = true;

                    // this.transIsHidden = true;
                    // this.hDocIsHidden = true;
                    // this.hIframeIsHidden = false;

                    window.open(
                        "http://10.64.140.50/workflow-console/workflow-page/diagram-viewer/indexDialog.html?processDefinitionId=zbwsdazl_process:16:212733&processInstanceId=337485"
                    );

                    let arr = [{ title: "", key: "help", icon: "" }];
                    MXWebui.setCustomHeaderMenu(JSON.stringify(arr), result => {
                        // 帮助
                    });

                    break;
            }
        },
        processButtonText(text) {
            var title = text;
            if (text.length > 3) {
                title = text.substring(0, 3) + "...";
            }
            return title;
        }
    },
    components: {
        HTransinfo,
        Tab,
        TabItem,
        HDocCell,
        Cell,
        Group,
        XTextarea,
        XButton,
        DetailFragment,
        Popup
    }
};
</script>

<style lang="less" scoped>

.button_container_cls {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    position: fixed;
    left: 0;
    right: 0;
    // top: 0px;
    bottom: 0px;

    background-color: aquamarine;

    .button_item_cls {
        // width: 100%;

        -webkit-flex: 1;
        flex: 1;
    }
}

.button_cls {
    height: 52px;
    // width: 100%;

    // margin: 0px 0px 0px 0px;

    white-space: nowrap;
    // overflow: hidden;
    text-overflow: ellipsis;
}

.button_text_span_cls {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>