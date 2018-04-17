<template>
    <div id="app">
        <button-tab style="padding: 20px">
            <button-tab-item>昨天</button-tab-item>
            <button-tab-item selected>今天</button-tab-item>
            <button-tab-item>明天</button-tab-item>
        </button-tab>

        <group>
            <!-- 图片引入  -->
            <img src="../../assets/logo.png" style="width:80px; height:80px" />
        </group>

        <group>
            <cell title="store" value="" :value="count"></cell>
        </group>
    </div>
</template>
<script>
import {
    Radio,
    Drawer,
    Group,
    Cell,
    ViewBox,
    XHeader,
    ButtonTab,
    ButtonTabItem
} from "vux";

export default {
    components: {
        Radio,
        Drawer,
        Group,
        Cell,
        ViewBox,
        XHeader,
        ButtonTab,
        ButtonTabItem
    },
    data() {
        return {
            
        };
    },
    mounted() {},
    methods: {
        onTap() {
            console.log("66666666666");
        }
    },
    computed: {},
    watch: {}
};
</script>
<style lang='less'>
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";

html,
body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
body {
    background-color: #fbf9fe;
}
#app {
    height: 100%;
}
</style>
