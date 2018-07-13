<template>
    <div>
        <flexbox orient="horizontal" justify="center">
            <div style="background-color:yellow;">{{text}}</div>

            <div style="background-color:blue;">{{text}}</div>
        </flexbox>

        <x-button type="primary" style="margin-top:10px" @click.native="onTap">native confirm</x-button>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem, XButton } from "vux";

export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
        onTap() {
            // MXWebui.disableBackWhenOccurCloseButton(true);

            this.setTitle('example')

            MXWebui.setNavBarColor('#bebebe')
            
        }
    },
    computed: {
        text() {
            return this.$store.state.home.context.text;
        }
    },
    components: {
        Flexbox,
        FlexboxItem,
        XButton
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