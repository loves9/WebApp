<template>
    <div id="app">
        <button-tab style="padding: 20px">
            <button-tab-item>审批人</button-tab-item>
            <button-tab-item selected>已办</button-tab-item>
            <button-tab-item>待办</button-tab-item>
        </button-tab>

        <group>
            <!-- 图片引入  -->
            <img src="@/assets/logo.png" style="width:80px; height:80px" />
        </group>

        <group>
            <cell title="姓名" :value="nameDesc"></cell>
            <cell title="年龄" :value="ageDesc"></cell>
            <cell title="性别" :value="genderDesc"></cell>
        </group>

        <group>
            <x-icon type="ios-ionic-outline" size="30"></x-icon>
            <x-icon type="ios-arrow-back" size="30"></x-icon>
            <x-icon type="ios-arrow-forward" size="30"></x-icon>
            <x-icon type="ios-arrow-up" size="30"></x-icon>
            <x-icon type="ios-arrow-thin-right" size="30"></x-icon>
            <x-icon type="ios-arrow-thin-down" size="30"></x-icon>
            <x-icon type="ios-arrow-thin-left" size="30"></x-icon>
        </group>

        <x-button type="primary" style="margin-top:10px" @click.native="back">back</x-button>

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
    ButtonTabItem,
    XButton
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
        ButtonTabItem,
        XButton
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {
        onTap() {
            console.log("66666666666");
        },
        back() {
            this.$router.back(-1);
        }
    },
    computed: {
        nameDesc() {
            return "8090";
        },
        ageDesc() {
            return "";
        },
        genderDesc() {
            return "";
        }
    },
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

.vux-x-icon {
    fill: @red;
}
</style>
