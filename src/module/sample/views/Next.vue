<template>
    <div>
        <div style="background-color:#fff; padding:20px 15px 20px; 15px;">
            <div>
                <span style="font-size:14px; color:#606266">下一步任务</span>
            </div>
            <span style="font-size:18px">部门领导审批</span>

        </div>

        <div class="button_container_cls">
            <x-button class="button_cls" @click.native="leftButtonClick">返回</x-button>

            <x-button type="primary" class="button_cls" style="margin-left:5px; color:#fff; margin-top:10px" @click.native="rightButtonClick">确定</x-button>
        </div>
    </div>
</template>

<script>
import { Tab, TabItem, Cell, Group, XTextarea, XButton } from "vux";

export default {
    data() {
        return {};
    },
    mounted() {
        
    },
    methods: {
        leftButtonClick(){
            
        },
        rightButtonClick(){
            
        }
    },
    components: {
        XButton
    }
};
</script>

<style lang="less">
.button_container_cls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 15px 0px 15px;

    .button_item_cls {
        padding-right: 5px;
        width: 100%;
    }
}

.button_cls {
    height: 52px;
    width: 172px;
    margin: 10px 5px 0px 0px;
}

.button_agree_cls {
    background-color: #298ccf;
    margin-left: 2px;
}
</style>