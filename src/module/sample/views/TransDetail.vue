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
            <group gutter="0px">
                <cell v-for="item in detailData" :key="item.title" :title="item.title" :value="item.detail"></cell>
            </group>

            <group style="border-color:red">
                <x-textarea :max="20" placeholder="请输入审批意见"></x-textarea>
            </group>

            <div class="button_container_cls">
                <x-button v-show="!leftButtonHidden" class="button_cls" @click.native="leftButtonClick(leftButtonData)">{{leftButtonTitle}}</x-button>
                <x-button v-show="!rightButtonHidden" type="primary" class="button_cls" style="margin-left:5px; color:#fff; margin-top:10px" @click.native="rightButtonClick(rightButtonData)">{{rightButtonTitle}}</x-button>
            </div>
        </div>

        <div v-for="item in docListData" :key="item.title">
            <h-doc-cell v-show="!hDocIsHidden" :title="item.title" :image="item.image" :subTitle="item.subTitle"></h-doc-cell>
            <div v-if="item != docListData[docListData.length - 1]" style="height:1px; background-color:#E7E7E7; margin-left:15px"></div>
        </div>

        <h-transinfo v-show="!transIsHidden" :transDataModle="transInfoData"></h-transinfo>

        <!-- <div v-show="!hIframeIsHidden" class="formData">
            <div class="box">
                <iframe ref="iframe" frameborder="0" class="iframe_cls" style="zoom:100%" src="http://10.80.38.205/workflow-console/workflow-page/diagram-viewer/indexDialog.html?processDefinitionId=zbwsdazl_process:16:212733&processInstanceId=337485"></iframe>
            </div>

        </div> -->
    </div>
</template>

<script>
import { HTransinfo, HDocCell } from "hrkj-vux-components";
import { Tab, TabItem, Cell, Group, XTextarea, XButton } from "vux";
import HttpBusinessRequest from "@/module/api/api.js";
import workflowData from "../workflow_data.js";

export default {
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
            detailData: [
                {
                    title: "审批编号",
                    detail: "2397428356527856375856"
                },
                {
                    title: "所在部门",
                    detail: "华融科技/软件开发部"
                },
                {
                    title: "请假类型",
                    detail: "事假"
                },
                {
                    title: "开始时间",
                    detail: "2018-06-08 13:30"
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
            rightButtonData: {}
        };
    },
    mounted() {
        this.workflowTitle = this.easyGetParams().title
        this.workflowTodoDetailRequest();
        this.workflowTransferRequest();
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
        },
        setButton(buttonData) {
            if (buttonData.length == 1) {
                this.leftButtonHidden = false;
                this.leftButtonTitle =
                    workflowData.workflowButton[buttonData[0].op];
                this.leftButtonData = buttonData[0];
                return;
            }

            buttonData.forEach(element => {
                if (element.op == "agree") {
                    this.rightButtonHidden = false;
                    this.rightButtonTitle =
                        workflowData.workflowButton[element.op];
                    this.rightButtonData = element;
                } else if (element.op == "terminate") {
                    this.leftButtonHidden = false;
                    this.leftButtonTitle =
                        workflowData.workflowButton[element.op];
                    this.leftButtonData = element;
                }

                // TODO: 根据业务情况定义左右按钮的内容
            });
        },
        leftButtonClick(button) {
            // TODO: 根据业务不同自行处理
        },

        rightButtonClick(button) {
            // TODO: 根据业务不同自行处理
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
            console.log(responeData);
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
                    this.gruopIsHidden = true;

                    this.transIsHidden = true;
                    this.hDocIsHidden = true;
                    this.hIframeIsHidden = false;

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
        XButton
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
}

.button_cls {
    height: 52px;
    width: 172px;
    margin-top: 10px;
}

.button_agree_cls {
    background-color: #298ccf;
    margin-left: 2px;
}

.iframe_cls {
    height: 100%;
    width: 100%;
}
</style>