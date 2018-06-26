<template>
    <div>
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载

        function onDeviceReady() {
            MXSetting &&
                typeof MXSetting.setConsoleLogEnabled === "function" &&
                MXSetting.setConsoleLogEnabled();
            console.log("ondeviceready");
        }
    },
    methods: {},
    components: {}
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
