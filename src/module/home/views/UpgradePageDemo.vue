<template>
    <div>
        <error-page type="system" buttonTitle="返回" v-on:HREVENT_errorButtonClick="errorButtonClick"></error-page>

    </div>
</template>

<script>
import ErrorPage from "@/components/errorpage/ErrorPage.vue";

export default {
    data() {
        return {};
    },
    mounted() {
        console.log('fff', this.easyGetParams());
    },
    methods: {
        errorButtonClick: function() {
            this.easyPop();
        }
    },
    components: {
        ErrorPage
    }
};
</script>

<style scoped>
</style>