<template>
    <div>
        <div v-for="section in helpListData" :key="section.sectionTitle">
            <span class="help_section_title_cls">{{section.sectionTitle}}</span>
            <group style="margin-top: -20px">
                <cell-box v-for="item in section.list" :key="item.title" @click.native="cellClick(item)" is-link>{{item.title}}</cell-box>
            </group>
        </div>

    </div>
</template>

<script>
import { CellBox, Group } from "vux";

import helpListDataModel from "./helpdata.json";

export default {
    data() {
        return {
            helpListData: helpListDataModel
        };
    },
    mounted() {
        this.setTitle("帮助");
    },
    methods: {
        cellClick(item){
            this.easyPush('/helpDetail', item)
        }
    },
    components: {
        CellBox,
        Group
    }
};
</script>

<style lang="less">
.help_section_title_cls {
    font-size: 14px;
    color: #606266;
    font-family: PingFangSC-Regular;
    letter-spacing: 0;
    margin: 15px 10px 0px 15px;
}
</style>