<template>
    <div>
        <!-- <router-view style="flex:1"></router-view> -->

        <!-- <div style="background-color:green; height:50px" @click="onTap">示例1111111</div>
                
        <cell style="background-color:yellow;">示例2222</cell>

        <cell title="卡号：" value="239847238957857845"></cell> -->

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
import { Radio, Drawer, Group, Cell, ViewBox, XHeader, Toast } from 'vux';

export default {
    components: {
        Radio,
        Drawer,
        Group,
        Cell,
        ViewBox,
        XHeader,
        Toast
    },
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        onTap() {
            console.log('66666666666');

            this.$router.push('/one', function(){
                console.log('complete');
            }, function(){
                console.log('abort');
            });

        }
    },
    computed: {
        
    },
    mounted() {

    },
    watch: {
        
    }
};

</script>
<style lang='less'>
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';



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
