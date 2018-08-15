<template>
    <div>
        <error-page type="upgrade" buttonTitle="返回" v-on:HREVENT_errorButtonClick="errorButtonClick"></error-page>
        
    </div>
</template>

<script>
import ErrorPage from "@/components/errorpage/ErrorPage.vue";


export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
        errorButtonClick: function(){
            alert('submit')
        }
    },
    components: {
        ErrorPage
    }
};
</script>

<style scoped>

</style>