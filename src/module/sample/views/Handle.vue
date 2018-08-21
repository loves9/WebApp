<template>
    <div style="height:100vh">
        <tab>
            <tab-item selected @on-item-click="itemTabClick(0)">待办</tab-item>
            <tab-item @on-item-click="itemTabClick(1)">已办</tab-item>
        </tab>
        <div v-show="noData" class="container_layout_cls">
            <i class="iconfont ic-wushuju-l" style="font-size:120px; color:#999999"></i>
            <span style="color:#999999; margin-top:-50px; font-size:12px">无数据</span>
        </div>
        <h-list v-show="!noData" :dataSource="listDataSource" v-on:HREVENT_itemClick="itemClick"></h-list>
    </div>
</template>

<script>
import { HList } from "hrkj-vux-components";

import { Tab, TabItem } from "vux";

export default {
    data() {
        return {
            listDataSource: [
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                },
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                },
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                },
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                },
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                },
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                },
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                },
                {
                    title: '固定收益-新增菜单',
                    title1: '分公司投放条件审批流程',
                    tab: '部门负责人审核',
                    time: '到达：2018-03-22'
                }
            ],

            noData: false
        };
    },
    mounted() {},
    methods: {
        itemTabClick(index){
            if(index == 1){
                this.noData = true
            }else{
                this.noData = false
            }
        },
        itemClick(item){
            this.easyPush('/transDetail', item)
        }
    },
    components: {
        Tab,
        TabItem,
        HList
    }
};
</script>

<style lang="less">
.container_layout_cls {
    display: flex;
    margin-top: -20%;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
}
</style>