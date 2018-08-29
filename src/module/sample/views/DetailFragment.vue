<template>
    <div>
        <group gutter="0px">
            <cell v-for="item in detailData" :key="item.title" :title="item.title" :value="item.detail"></cell>
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
            ]
        };
    },
    mounted() {
        console.log('fra')
    },
    methods: {},
    components: {
        Cell,
        Group
    }
};
</script>

<style lang="less">
</style>