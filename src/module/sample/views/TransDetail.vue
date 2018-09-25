<template>
    <div>
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

            <group style="border-color:red">
                <x-textarea :max="20" placeholder="请输入意见"></x-textarea>
            </group>

            <div class="button_container_cls">

                <div v-for="item in optionButtonData" :key="item.op" class="button_item_cls">
                    <x-button :ref="item.op" :type="item.op == 'agree'? 'primary':'default'" class="button_cls" @click.native="buttonItemClick(item)">{{item.text}}</x-button>
                    <div v-if="item.op != optionButtonData[optionButtonData.length - 1].op" style="width:5px; height:2px"></div>
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
</template>

<script>
import { HTransinfo, HDocCell } from "hrkj-vux-components";
import { Tab, TabItem, Cell, Group, XTextarea, XButton } from "vux";
import HttpBusinessRequest from "@/module/api/api.js";
import workflowData from "../workflow_data.js";

import DetailFragment from "./DetailFragment.vue";

export default {
    name: "transDetail",
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

            optionButtonData: []
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
            this.optionButtonData = buttonData;
        },
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
            console.log(item);
            // TODO: 根据业务不同自行处理

            if (item.op == "agree") {
                this.easyPush('/next')
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
        DetailFragment
    }
};
</script>

<style lang="less">
.button_container_cls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 15px 0px 15px;

    .button_item_cls {
        padding-right: 5px;
        width: 100%;
    }
}

.button_cls {
    height: 52px;
    width: 172px;
    margin: 10px 5px 0px 0px;
}

.button_agree_cls {
    background-color: #298ccf;
    margin-left: 2px;
}
</style>