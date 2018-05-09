<template>
    <div>
        <!-- push -->
        <group>
            <cell title="push" value="" @click.native="onTap" is-link></cell>
        </group>

        <!-- 被修改后的vux组件颜色 -->
        <x-button type="primary" style="margin-top:10px" @click.native="clickBtn">submit</x-button>

        <!-- 列表 -->
        <group>
            <cell title="name" v-for="(item, index) in dataList" :key="item" :value="dataList[index].text"></cell>
        </group>

        <!-- iframe -->
        <group>
            <cell title="iframe" value="" @click.native="previewPic" is-link></cell>
        </group>
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
    XButton,
    Popup,
    Calendar
} from "vux";

import pdf from "vue-pdf";

import { AUTH_LOGIN } from "@/store/types.js";
import requestInstance from "@/http/index.js";

export default {
    components: {
        Radio,
        Drawer,
        Group,
        Cell,
        ViewBox,
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
            imageUrl: "",
            dataList: [
                {
                    text: "111111"
                },
                {
                    text: "222222"
                },
                {
                    text: "333333"
                }
            ]
        };
    },
    mounted() {
        // 入口处需要等待 MXSetting 初始化后才能调用native方法
        // document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载
        // function onDeviceReady() {
        //     console.log("ondeviceready");
        //     MXSetting &&
        //         typeof MXSetting.setConsoleLogEnabled === "function" &&
        //         MXSetting.setConsoleLogEnabled();
        // }

        // this.sendRequest();

        this.$store.dispatch("savePassText", {text: '第二页数据初始化！'});

        
    },
    methods: {
        onTap() {
            this.$router.push({ path: "/query" });
        },

        clickBtn() {
            this.dataList[0].text = 55555;
        },

        previewPic() {
            this.showpop = true;
        },

        reinitIframe() {
            let ifm = document.getElementById("imageurl");
            if (ifm != null) {
                ifm.height = window.screen.height;
                ifm.width = "100%";
            }
        },
        onload() {},
        getPDFUrl() {
            return "/static/test.pdf";
        },
        sendRequest() {
            var me = this;
            // this.$vux.loading.show({
            //     text: "Loading"
            // });
            let request = requestInstance.queryFeeCategory();
            request.complete = function() {
                me.$vux.loading.hide();
            };
            request.success = function(data, status, xhr) {
                data = JSON.parse(data);
            };
            request.error = function(data, status, xhr) {
                me.$vux.toast.text(status, "middle");
            };
            // 发送请求
            MXCommon.ajax(request);
        }
    },
    watch: {
        showpop(n, o) {
            console.log(n);
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
