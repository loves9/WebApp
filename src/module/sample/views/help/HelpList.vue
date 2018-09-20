<template>
    <div>
        <div v-for="section in helpListData" :key="section.sectionTitle">
            <span class="help_section_title_cls">{{section.sectionTitle}}</span>
            <group gutter="0">
                <cell-box v-for="item in section.list" :key="item.title" @click.native="cellClick(item)" is-link>{{item.title}}</cell-box>
            </group>
        </div>

        <div class="help_container_cls">
            <img class="help_image_cls" src="/static/images/workflow_phone.png" />
            <div class="help_tele_container_cls">
                <span class="help_tel_span_cls">支持电话</span>
                <span class="help_tel_num_span_cls">010-xxxxxxxxx</span>
            </div>
        </div>

    </div>
</template>

<script>
import { CellBox, Group } from "vux";

import helpListDataModel from "./helpdata.json";

export default {
    name: 'helpList',
    data() {
        return {
            helpListData: helpListDataModel
        };
    },
    created(){
        MXWebui.hideOptionMenu();
        this.setTitle("帮助");
    },
    mounted() {
        
    },
    methods: {
        cellClick(item) {
            this.easyPush("/helpDetail", item);
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
    margin: 10px 10px 10px 15px;
}

.help_container_cls {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: white;
    margin-top: 20px;
    position: absolute;
    bottom: 0px;
}

.help_image_cls {
    width: 50px;
    height: 50px;
}

.help_tele_container_cls {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.help_tel_span_cls {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #298ccf;
    letter-spacing: 0;
}

.help_tel_num_span_cls {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #298ccf;
    letter-spacing: 0;
}
</style>