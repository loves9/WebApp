<template>
    <div>
        <group>
            <cell title="金额：" :value="spend" is-link></cell>
        </group>

        <!-- 被修改后的vux组件颜色 -->
        <x-button type="primary" style="margin-top:10px" @click.native="onTap">下一页</x-button>

        <x-button type="primary" style="margin-top:10px" @click.native="sendRequest">Request</x-button>

        <x-button type="primary" style="margin-top:10px" @click.native="confirm">native confirm</x-button>
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

import HttpBusinessRequest from "@/module/api/api.js";

import Statistics from "@/core/statistics";

export default {
    components: {
        Radio,
        Drawer,
        Group,
        Cell,
        ViewBox,
        XButton,
        Popup
    },
    data() {
        return {
            message: "66666",
            pageCount: 2,
            popheight: window.screen.height,
            showpop: false
        };
    },
    created() {},
    mounted() {
        document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载

        function onDeviceReady() {
            MXSetting &&
                typeof MXSetting.setConsoleLogEnabled === "function" &&
                MXSetting.setConsoleLogEnabled();
            console.log("ondeviceready");
        }

        // this.$store.dispatch("savePassText", {
        //     text: "这是home page 传过来的数据！"
        // });

        // console.log($)
    },
    filters: {
        dirFil: function(value) {
            return value;
        }
    },
    methods: {
        confirm() {
            let self = this;
            // 模拟网络请求
            setTimeout(() => {
                self.message = "89898989";
            }, 2000);
        },

        onTap() {
            this.$router.push({ path: "/approve" });
        },

        clickBtn() {
            this.dataList[0].text = 55555;
        },

        previewPic() {
            this.showpop = true;
        },

        upgradePage() {
            this.easyPush('/upgradePage', {name: 'fffff'})
            // this.$router.push({ path: "/upgradePage" });
        },
        getPDFUrl() {
            return "/static/test.pdf";
        },

        mobilePluginTest() {
            MXCommon.getCurrentUser(
                function(result) {
                    console.log(result);
                } //这里可以处理获取到的当前用户数据
            );
        },

        /**
         * 原生请求示例
         *
         */
        sendRequest() {
            var me = this;
            let request = HttpBusinessRequest.queryMockServer();
            request.complete = function() {
                console.log("complete");
            };
            request.success = function(data, status, xhr) {
                console.log(data);
            };
            request.error = function(data, status, xhr) {
                console.log(data);
            };
            // 发送请求
            request.send();
        }
    },
    watch: {
    },
    computed: {
        spend() {
            // console.log(this.$core);
            return "";
        }
    }
};
</script>
<style lang='less'>
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";

body {
    height: 100%;
}
</style>
