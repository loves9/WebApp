<template>
    <div>
        {{text}}
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    computed: {
        text() {
            return this.$store.state.home.context.text;
        }
    },
    components: {}
};
</script>