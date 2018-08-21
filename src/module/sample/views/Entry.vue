<template>
    <div>
        <h-flexbox :componentListData="dataSource" v-on:HREVENT_itemClick="itemClick"></h-flexbox>
        <span class="sub_label_cls">新建流程</span>
        <h-flexbox :componentListData="dataSourceNew" v-on:HREVENT_itemClick="itemClick_two"></h-flexbox>

    </div>
</template>

<script>
import { HFlexbox, HDocCell } from "hrkj-vux-components";
export default {
    data() {
        return {
            dataSource: [
                {
                    name: "待办事宜",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                },
                {
                    name: "我的请求",
                    iconClass: "ic-wodeqingqiu-l",
                    fontSize: "30px",
                    color: "#FFB000",
                    path: "handle"
                },
                {
                    name: "已办事宜",
                    iconClass: "ic-yiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                },
                {
                    name: "办结事宜",
                    iconClass: "ic-banjie-l",
                    fontSize: "30px",
                    color: "#00A79F",
                    path: "handle"
                }
            ],
            dataSourceNew: [
                {
                    name: "上网申请",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                },
                {
                    name: "请假申请",
                    iconClass: "ic-wodeqingqiu-l",
                    fontSize: "30px",
                    color: "#FFB000",
                    path: "handle"
                },
                {
                    name: "简单流转",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                },
                {
                    name: "会议申请",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                },
                {
                    name: "申报管理",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                },
                {
                    name: "报销申请",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                },
                {
                    name: "签报流转",
                    iconClass: "ic-daiban-l",
                    fontSize: "30px",
                    color: "#47B3E1",
                    path: "handle"
                }
            ]
        };
    },
    mounted() {
        
    },
    methods: {
        itemClick(item){
            this.easyPush('/handle', item)
        },
        itemClick_two(item){

            this.easyPush('/upgradePage', item)

        }
    },
    components: {
        HFlexbox,
        HDocCell
    }
};
</script>

<style lang="less">
.sub_label_cls {
    color: #606266;
    font-size: 14px;
    margin: 15px 20px 20px 15px;
}
</style>