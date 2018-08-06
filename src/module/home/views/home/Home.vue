<template>
    <div>
        <!-- 列表 -->
        <!-- <group>
            <cell title="name" v-for="(item, index) in dataList" :key="index" :value="dataList[index].text"></cell>
        </group> -->

        <!-- iconfont 样式 -->
        <!-- <i class="font_family icon-fenxianggongzuo" style="font-size:30px;"></i> -->

        <!-- iframe -->
        <!-- <group>
            <cell title="iframe" value="" @click.native="previewPic" is-link style="height:27px">
                <i slot="icon" class="font_family icon-shezhi" style="font-size:30px"></i>
            </cell>
        </group>
        <div>
            <popup v-model="showpop" position="bottom">
                <div style="padding: 15px;">
                    <x-button @click.native="showpop = false" plain type="default"> Close Me </x-button>
                </div>
                <iframe id="imageurl" frameborder=0 :src="getPDFUrl()" width="100%" :height="popheight" :onload="onload()" />
            </popup>
        </div> -->

        <group>
            <cell title="金额：" :value="spend" is-link></cell>
        </group>

        <!-- 被修改后的vux组件颜色 -->
        <x-button type="primary" style="margin-top:10px" @click.native="onTap">下一页</x-button>

        <x-button type="primary" style="margin-top:10px" @click.native="sendRequest">axios Request</x-button>

        <x-button type="primary" style="margin-top:10px" @click.native="confirm">native confirm</x-button>

        <group>
            <cell title="金额：" :value="message | dirFil" is-link></cell>
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
            message: '66666',
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
            return value
        }
    },
    methods: {
        confirm() {
            let self = this
            // 模拟网络请求
            setTimeout(() => {
                self.message = '89898989'
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

        reinitIframe() {
            let ifm = document.getElementById("imageurl");
            if (ifm != null) {
                ifm.height = window.screen.height;
                ifm.width = "100%";
            }
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
                me.$vux.loading.hide();
            };
            request.success = function(data, status, xhr) {
                console.log(data)
            };
            request.error = function(data, status, xhr) {
                console.log(data)
                me.$vux.toast.text(data, "middle");
            };
            // 发送请求
            request.send()
        }
    },
    watch: {
        showpop(n, o) {
            console.log(n);
        }
    },
    computed: {
        spend() {
            console.log(this.$core);
            return "";
        }
    }
};
</script>
<style lang='less'>
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";

body{
    height: 100%;
}
</style>
