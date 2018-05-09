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
        alert('555')
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