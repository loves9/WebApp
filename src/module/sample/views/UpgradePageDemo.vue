<template>
    <div>
        <error-page :type="errorType" buttonTitle="返回" v-on:HREVENT_errorButtonClick="errorButtonClick"></error-page>

    </div>
</template>

<script>
import ErrorPage from "@/components/errorpage/ErrorPage.vue";

export default {
    data() {
        return {
            errorType: 'system'
        };
    },
    created() {
        console.log('fff', this.easyGetParams());
        this.errorType = this.easyGetParams().type
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