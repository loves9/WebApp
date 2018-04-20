<template>
    <div>
        <!-- push -->
        <group>
            <cell title="push" value="" @click.native="onTap" is-link></cell>
        </group>

        <group>
            <cell title="iframe预览图片、word、pdf等" value="" @click.native="previewPic" is-link></cell>
        </group>

        <!-- 被修改后的vux组件颜色 -->
        <x-button type="primary" style="margin-top:10px">submit</x-button>

        <!-- iframe -->
        <div v-transfer-dom>
            <popup v-model="showpop" position="bottom">
                <div style="padding: 15px;">
                    <x-button @click.native="showpop = false" plain type="default"> Close Me </x-button>
                </div>
                <iframe id="imageurl" frameborder=0 :src="getPDFUrl()" width="100%" :height="popheight" :onload="onload()" />
                <!-- <pdf src="/static/test.pdf" ></pdf> -->
            </popup>
        </div>

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
    Toast,
    XButton,
    Popup
} from "vux";

import pdf from "vue-pdf";

export default {
    components: {
        Radio,
        Drawer,
        Group,
        Cell,
        ViewBox,
        XHeader,
        Toast,
        XButton,
        Popup,
        pdf
    },
    data() {
        return {
            pageCount: 2,
            popheight: window.screen.height,
            showpop: false,
            iframeWidth: "100%",
            iframeHeight: "100%",
            pdfUrl: "",
            imageUrl: ""
        };
    },
    mounted() {
        // 入口处需要等待 MXSetting 初始化后才能调用native方法
        window.onload = function() {
            document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载
        };
        function onDeviceReady() {
            console.log("ondeviceready");
            MXSetting &&
                typeof MXSetting.setConsoleLogEnabled === "function" &&
                MXSetting.setConsoleLogEnabled();
        }


    },
    methods: {
        onTap() {
            this.$router.push({ path: "/approve" });
        },

        previewPic() {
            this.showpop = true;
        },
        reinitIframe() {
            var ifm = document.getElementById("imageurl");
            if (ifm != null) {
                ifm.height = window.screen.height;
                ifm.width = "100%";
            }
        },
        onload() {
        },
        getPDFUrl() {
            return "/static/test.pdf";
        }
    },
    computed: {}
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
