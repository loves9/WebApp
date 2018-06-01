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

        <!-- push -->
        <!-- <group>
            <cell title="push" value="" @click.native="onTap" is-link></cell>
        </group> -->

        <!-- 被修改后的vux组件颜色 -->
        <x-button type="primary" style="margin-top:10px" @click.native="onTap">下一页</x-button>

        <x-button type="primary" style="margin-top:10px" @click.native="axiosRequest">axiosRequest</x-button>

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

import { AUTH_LOGIN } from "@/store/types.js";
import requestInstance from "@/http/index.js";

import axios from "axios";
import { error } from "util";

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
        this.$store.dispatch("savePassText", {
            text: "这是home page 传过来的数据！"
        });
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

        /**
         * axios请求样例
         *
         * {
         *  // `data` 由服务器提供的响应
         *  data: {},
         *  // `status` 来自服务器响应的 HTTP 状态码
         *  status: 200,
         *  // `statusText` 来自服务器响应的 HTTP 状态信息
         *  statusText: 'OK',
         *  // `headers` 服务器响应的头
         *  headers: {},
         *  // `config` 是为请求提供的配置信息
         *  config: {}
         * }
         */
        axiosRequest() {
            axios(requestInstance.queryMockServer())
                .then(response => {
                    console.log(response.data);

                    if (response.status == 200) {
                        this.$vux.toast.text("请求成功", "middle");
                    } else {
                        this.$vux.toast.text("请求失败", "middle");
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.$vux.toast.text("请求失败", "middle");
                });
        },

        /**
         * 原生请求示例
         *
         */
        sendRequest() {
            // var me = this;
            // this.$vux.loading.show({
            //     text: "Loading"
            // });
            // let request = requestInstance.queryFeeCategory();
            // request.complete = function() {
            //     me.$vux.loading.hide();
            // };
            // request.success = function(data, status, xhr) {
            //     data = JSON.parse(data);
            // };
            // request.error = function(data, status, xhr) {
            //     me.$vux.toast.text(status, "middle");
            // };
            // 发送请求
            // MXCommon.ajax(request);
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
</style>
