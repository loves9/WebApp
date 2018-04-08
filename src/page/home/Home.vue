<template>

    <div id="app">
        <div style="background-color:green; height:50px" @click="onTap">审批</div>
                
        <div style="background-color:yellow; height:50px">报销</div>

        
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
    mounted() {
        console.log('pagetwo');
    },
    methods: {
        onTap() {
            this.$router.push({path: '/approve'})
        }
    },
    computed: {
        
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
