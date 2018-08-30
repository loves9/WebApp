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
import HttpBusinessRequest from "@/module/api/api.js";

export default {
    data() {
        return {
            listDataSource: [],

            noData: false
        };
    },
    mounted() {
        this.workflowTodoRequest();

        this.setTitle("待办已办");
    },
    methods: {
        itemTabClick(index) {
            if (index == 1) {
                this.noData = true;
            } else {
                this.noData = false;
            }
        },
        itemClick(item) {
            this.easyPush("/transDetail", item);
        },
        workflowTodoRequest() {
            let request = HttpBusinessRequest.workflowTodo();
            request.complete = function() {};
            request.success = (data, status, xhr) => {
                this.analysisData(data);
            };
            request.error = (data, status, xhr) => {};
            // 发送请求
            request.send();
        },
        analysisData(responesData) {
            for (let index in responesData.content) {
                console.log(item);
                let item = responesData.content[index];
                item.time = item.createTime;

                this.listDataSource.push(item);
            }
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