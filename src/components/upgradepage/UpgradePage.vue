<template>
    <div class="upgrade_container_cls">
        <img class="upgrade_img_cls" src="./images/upgrade.png" />

        <div class="upgrade_text_container_cls">
            <span class="label_one ">精彩内容，稍后呈现…</span>
            <span class="label_two">尊敬的用户，您好！</span>
            <span class="label_two">由于目前系统升级中，</span>
            <span class="label_two">给您造成不便，敬请谅解。</span>
            <span class="label_three">服务电话：010-59618206</span>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    components: {}
};
</script>

<style lang="less">
.upgrade_container_cls {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.upgrade_text_container_cls {
    display: flex;
    // justify-content: center;
    flex-direction: column;
}

.upgrade_img_cls {
    width: 239px;
    height: 196px;
    margin-top: 50px;
}
.label_one {
    color: #346dc7;
    font-size: 24px;
    margin-top: 40px;
    padding-left: 50px;
    margin-bottom: 20px;
    font-family: "PingFangSC-Medium";
}
.label_two {
    color: #303133;
    font-size: 16px;
    margin-top: 10px;
    padding-left: 50px;
    font-family: "PingFangSC-Regular";
}

.label_three {
    color: #346dc7;
    font-size: 16px;
    margin-top: 10px;
    padding-left: 50px;
    font-family: "PingFangSC-Medium";
}
</style>