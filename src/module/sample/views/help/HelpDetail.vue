<template>
    <div>
        <span class="help_detail_cls">{{context}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            context: ""
        };
    },
    mounted() {
        this.context = this.easyGetParams().detail;
    },
    methods: {},
    components: {}
};
</script>

<style lang="less">
.help_detail_cls {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #606266;
    letter-spacing: 0;
    line-height: 30px;
    padding: 20px 30px 30px 30px;
}
</style>