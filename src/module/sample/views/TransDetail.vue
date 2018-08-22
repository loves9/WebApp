<template>
    <div>
        <div style="background-color:#fff; padding:20px 15px 20px; 15px;">
            <span style="font-size:18px">请假申请流程</span>
            <div>
                <span style="font-size:14px; color:#606266">苗译元</span>
                <span style="font-size:12px; margin-left:10px; color:#909399">2018-06-02 09:30</span>
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
                <cell title="审批编号" value="2397428356527856375856"></cell>
                <cell title="所在部门" value="华融科技/软件开发部"></cell>
                <cell title="请假类型" value="事假"></cell>
                <cell title="开始时间" value="2018-06-08 13:30"></cell>
                <cell title="结束时间" value="2018-06-08 17:30"></cell>
            </group>

            <group style="border-color:red">
                <x-textarea :max="20" placeholder="请输入审批意见"></x-textarea>
            </group>

            <div class="button_container_cls">
                <x-button class="button_cls">拒绝</x-button>
                <x-button class="button_cls" style="background-color:#298CCF; margin-left:2px; color:#fff; margin-top:10px">同意</x-button>
            </div>
        </div>

        <h-doc-cell v-show="!hDocIsHidden" title="2018号文件" image="/static/pdf.png"></h-doc-cell>
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

export default {
    data() {
        return {
            transInfoData: [
                {
                    id: "12312323",
                    processInstanceId: "",
                    createTime: "2018-06-29 17:41",
                    startTime: "2018-06-29 17:41",
                    endTime: "2018-06-29 17:41",
                    durationInMillis: "0",
                    dueDate: null,
                    deleteReason: null,
                    participant: {
                        id: "21631480110521698",
                        code: "miaoshipeng@chamc.com.cn@25470",
                        name: "苗世鹏",
                        org: "ORG100002274",
                        orgName: "软件开发部",
                        type: null
                    },
                    comment: null
                },
                {
                    id: "347692",
                    processInstanceId: null,
                    executionId: null,
                    name: "领导审批",
                    createTime: "2018-06-29 17:41",
                    startTime: "2018-06-29 17:41",
                    endTime: "2018-06-29 17:42",
                    durationInMillis: "66000",
                    dueDate: null,
                    deleteReason: null,
                    participant: {
                        id: "21631475849108832",
                        code: "wangzeyu@chamc.com.cn@25403",
                        name: "王泽宇",
                        org: "ORG100002274",
                        orgName: "软件开发部",
                        type: null
                    },
                    comment: {
                        id: null,
                        author: "wangzeyu@chamc.com.cn@25403",
                        message:
                            "agree|这里显示审批意见内容。这里显示审批意见内容。这里显示审批意见内容。 ",
                        createTime: null
                    }
                },
                {
                    id: "347692",
                    processInstanceId: null,
                    executionId: null,
                    name: "领导审批",
                    createTime: "2018-06-29 17:41",
                    startTime: "2018-06-29 17:41",
                    endTime: "2018-06-29 17:42",
                    durationInMillis: "66000",
                    dueDate: null,
                    deleteReason: null,
                    participant: {
                        id: "21631475849108832",
                        code: "wangzeyu@chamc.com.cn@25403",
                        name: "王泽宇",
                        org: "ORG100002274",
                        orgName: "软件开发部",
                        type: null
                    },
                    comment: {
                        id: null,
                        author: "wangzeyu@chamc.com.cn@25403",
                        message:
                            "reject|这里显示审批意见内容。这里显示审批意见内容。这里显示审批意见内容。 ",
                        createTime: null
                    }
                }
            ],
            gruopIsHidden: false,
            tabIndex: 0,
            transIsHidden: true,
            hDocIsHidden: true,
            hIframeIsHidden: true
        };
    },
    mounted() {

    },
    methods: {
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


.formData{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.box{
    width:100%;
    overflow: hidden;
}
</style>