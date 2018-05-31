<template>
    <div>
        <flexbox orient="horizontal" justify="center">
            <div style="background-color:yellow;">{{text}}</div>

            <div style="background-color:blue;">{{text}}</div>
        </flexbox>

    </div>
</template>

<script>

import { Flexbox, FlexboxItem } from "vux";

export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    computed: {
        text() {
            return this.$store.state.home.context.text;
        }
    },
    components: {
        Flexbox,
        FlexboxItem
    }
};
</script>

<style scoped>
.main {
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;
}
</style>