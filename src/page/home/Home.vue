<template>
    <div>
        <!-- push -->
        <div style="background-color:green; height:50px" @click="onTap">push</div>

        <div style="background-color:yellow; height:50px" @click="previewPic">iframe预览图片、word、pdf等</div>

        <!-- 被修改后的vux组件颜色 -->
        <x-button type="primary">submit</x-button>

        <!-- 图片引入  -->
        <img src="../../assets/vue.jpg" style="width:80px; height:80px" />

        <!-- iframe -->
        <div v-transfer-dom>
            <popup v-model="showpop" position="bottom">
                <div style="padding: 15px;">
                    <x-button @click.native="showpop = false" plain type="default"> Close Me </x-button>
                </div>
                <iframe id="imageurl" frameborder=0 :src="getPDFUrl()" width="100%" :height="popheight" :onload="onload()"/>
                <!-- <iframe width="100%" height="500" src="/static/web/viewer.html?file=/static/test.pdf"></iframe> -->
                <!-- <pdf src="/static/test.pdf"></pdf> -->

                <!-- <pdfshower :pdfurl="getPDFUrl()" scale="1.2"></pdfshower> -->
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
import pdfshower from "vue-pdf-shower";

import $ from 'jquery'
import panzoom from 'jquery.panzoom'

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
        pdf,
        pdfshower
    },
    data() {
        return {
            pageCount: 2,
            popheight: window.screen.height,
            showpop: false,
            iframeWidth: "100%",
            iframeHeight: "100%",
            pdfUrl:
                "http://10.80.38.161:9701/jiuqiapp/image_item_app?billId=62B8C4FC60000001A0770D7CACD810E9&modelId=ACD1019256F3DF780066CC6E22E5FDBA&saveType=1&location=0",
            imageUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445254717&di=975d87e9ecc7c36f550b2f1ec789aca8&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F203fb80e7bec54e7dad8a1a9bf389b504fc26a55.jpg"
        };
    },
    mounted() {
        console.log("homepage");
        // this.reinitIframe()
    },
    methods: {
        onTap() {
            this.$router.push({ path: "/approve" });
        },

        previewPic() {
            this.showpop = true;
        },
        reinitIframe() {
            var ifm= document.getElementById("imageurl");
	        if( ifm != null) {
	    	ifm.height = window.screen.height;
	    	ifm.width = "100%";
	        }
        },
        onload(){
            $("#imageurl").panzoom();

            // var $panzoom = null;
            // var cifm = $("#imageurl").contents().find("iframe");
            // var testtst = $("#imageurl").contents().children("iframe").prevObject;
    		// if(cifm.length == 0){ 
	    	// 	$panzoom = $("#imageurl").contents().find("body").panzoom({
	    	// 			minScale: 0.4,
	    	// 	        $reset: $(".reset")
	    	// 	});
	   	    //  	$panzoom.panzoom("option", {
	   	    //  		window: document.getElementById("imageurl").contentWindow
            //     });
                
    		// } 
    		//  if(cifm.length != 0){
   			// 	temp = cifm.eq(0);
   			// 	$panzoom = temp.contents().find("body").panzoom({
	   		// 		 minScale: 0.4,
	   		//          $reset: $(".reset")
	   		// 	}); 
	  	    //  	$panzoom.panzoom("option", {
	  	    //  		window:cifm[0].contentWindow
			// 	});
    		//  }
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
