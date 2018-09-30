<template>
    <div>
        <group gutter="0px">
            <cell primary="content" v-for="item in detailData" :key="item.title" :title="item.title">
                <div class="detail_cls">{{item.detail}}</div>
            </cell>
        </group>
    </div>
</template>

<script>
import { Tab, TabItem, Cell, Group, XTextarea, XButton } from "vux";

export default {
    data() {
        return {
            detailData: [
                {
                    title: "审批编号",
                    detail: "GW20180930"
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
                    title: "开始日期",
                    detail: "2018-06-08"
                },
                {
                    title: "结束日期",
                    detail: "2018-06-16"
                },
                {
                    title: "所在公司",
                    detail: "华融科技"
                },
                {
                    title: "事件描述",
                    detail: "出国旅游，先去韩国，停留2天后坐船去日本"
                },
                {
                    title: "总计天数",
                    detail: "7天"
                }
            ]
        };
    },
    mounted() {
    },
    methods: {},
    components: {
        Cell,
        Group
    }
};
</script>

<style lang="less">
.detail_cls {
    margin-left: 50px;
    text-align: left;
}
</style>