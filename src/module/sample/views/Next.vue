<template>
    <div>
        <div style="background-color:#fff; padding:20px 15px 20px; 15px;">
            <div>
                <span style="font-size:14px; color:#606266">请确认下一步任务的办理人</span>
            </div>
            <span style="font-size:18px">"部门领导审批"</span>
        </div>

        <div style="background-color: #fff; margin-top:10px">
            <!-- <i class="iconfont ic-jiahao-yuan-l" style="font-size:40px; color:#298CCF; padding:15px" @click="selectUser"></i> -->

            <!-- <flexbox orient="vertical">
                <flexbox-item v-for="(item, index) in userData" :key="index">
                    <div class="display_user_cls">
                        <h-doc-cell :title="item.name" :image="item.avatar_url" :subTitle="item.dept_name"></h-doc-cell>
                        <i class="iconfont ic-jianhao-yuan-l" style="font-size:30px; color:red; padding:15px" @click="deletUser"></i>
                    </div>
                </flexbox-item>
            </flexbox> -->

            <grid :show-lr-borders="false" :show-vertical-dividers=true :cols=4>
                <div v-for="(item, index) in userData" :key="index">
                    <grid-item :label="item.name">
                        <!-- <div v-if="!item.addItem">

                        </div> -->

                        <i v-if="!item.addItem" class="iconfont ic-jianhao-yuan-l" style="font-size:20px; color:red; position:absolute; top:5px; right:10px" @click="deletUser(item)"></i>
                        <img v-if="!item.addItem" slot="icon" :src="item.avatar_url">

                        <x-icon v-if="item.addItem" slot="icon" type="ios-plus-outline" size="30" class="add_icon_cls" style="" @click="selectUser"></x-icon>

                        <!-- <i v-if="item.addItem" slot="icon" class="iconfont ic-jiahao-yuan-l" style="font-size:40px; color:#298CCF; margin-top:-50px" @click="selectUser"></i> -->
                    </grid-item>

                    <!-- <grid-item v-if="item.addItem" label="添加" @on-item-click="selectUser">
                        <i slot="icon" class="iconfont ic-jiahao-yuan-l" style="font-size:40px; color:#298CCF; margin-top:-50px" @click="selectUser"></i>

                    </grid-item> -->
                </div>
            </grid>

        </div>

        <group>
            <x-switch title="邮件提醒" v-model="mailValue"></x-switch>
            <x-switch title="融讯通提醒" v-model="imValue"></x-switch>
            <x-switch title="短信提醒" v-model="phoneMessageValue"></x-switch>
        </group>

        <div class="next_button_container_cls">
            <x-button class="button_cls" @click.native="leftButtonClick">返回</x-button>

            <x-button type="primary" class="button_cls" style="margin-left:5px; color:#fff; margin-top:10px" @click.native="rightButtonClick">确定</x-button>
        </div>

        <div transfer-dom>
            <popup v-model="showPop" style="background-color:#f4f4f4" height="100%">
                <div>
                    <flexbox orient="vertical">
                        <flexbox-item v-for="(item, index) in limitUserData" :key="index">
                            <div class="select_item_cls">
                                <check-icon :value.sync="item.selected" @click.native="limitedSelect(item)">
                                </check-icon>
                                <h-doc-cell :title="item.name" :image="item.avatar_url" :subTitle="item.dept_name"></h-doc-cell>
                            </div>
                        </flexbox-item>
                    </flexbox>
                </div>
                <!-- <x-button type="primary" class="select_button_cls" @click.native="selectButtonClick">确定</x-button> -->
            </popup>
        </div>
    </div>
</template>

<script>
import {
    Group,
    XButton,
    XSwitch,
    Flexbox,
    FlexboxItem,
    Popup,
    CheckIcon,
    Grid,
    GridItem
} from "vux";
import { HDocCell } from "hrkj-vux-components";

export default {
    data() {
        return {
            mailValue: true,
            imValue: true,
            value: false,
            selectMuti: false,
            userData: [
                {
                    addItem: true,
                    name: "添加"
                }
            ],
            addItem: {
                addItem: true,
                name: "添加"
            },
            selectedUser: [],
            phoneMessageValue: false,
            mValue: false,
            showPop: false,
            checkState: false,
            limitUserData: [
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "周文舒",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "刘艳茹",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "张涛",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "韩梅梅",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "李磊",
                    dept_name: "经理",
                    selected: false
                },
                {
                    avatar_url: "http://10.64.140.238/photos/user_photo_4",
                    name: "John",
                    dept_name: "经理",
                    selected: false
                }
            ]
        };
    },
    mounted() {
        this.setTitle("下一步");
    },
    methods: {
        onItemClick() {
        },
        deletUser(item) {
            console.log(item);
            // this.userData.pop(item);

            var temArr = []
            for (let i = 0; i < this.userData.length; i++) {
                if (this.userData[i].name != item.name) {
                    temArr.push(this.userData[i])
                }
            }
            this.userData = temArr

            for (let i = 0; i < this.limitUserData.length; i++) {
                if (this.limitUserData[i].name == item.name) {
                    this.limitUserData[i].selected = false;
                }
            }
        },
        selectUser() {
            this.userData = [];

            if (this.selectMuti) {
                // MXContacts.selectUsers(
                //     result => {
                //         console.log(result);
                //         this.userData = result.data;
                //         // result.data.forEach(element => {
                //         //     this.selectedUser.push(element.id)
                //         // });
                //     }, //这里可以处理通讯录获取到的人员以及部门数据
                //     false, //是否可以选中部门
                //     [],
                //     true,
                //     false,
                //     this.selectedUser
                // );
            } else {
                this.showPop = true;

                return;

                MXContacts.selectUser(
                    result => {
                        //这里可以处理通讯录获取到的人员以及部门数据
                        /*
                    {
                       "success": true,
                       "data": {
                            "id": 24961,
                            "email": "test@dehuinet.com",
                            "name": "test",
                            "login_name": "test@dehuinet.com",
                            "avatar_url": "http://www.minxing365.com/photos/e9c91ef6845314c049f57976acde83f0",
                            "dept_id": 899,
                            "dept_code": "001003003",
                            "dept_name": "产品中心/售前方案部"
                       }
                    }
                    */

                        console.log(result);
                        this.userData.push(result.data);


                    },
                    true //是否可以选中部门
                );
            }
        },
        leftButtonClick() {
            this.easyPop();
        },
        rightButtonClick() {
            this.easyPop(-2);
            this.$vux.toast.show({
                text: "办理成功"
            });
        },
        selectButtonClick() {
            this.showPop = false;
        },
        limitedSelect(item) {
            this.showPop = false;

            if (this.checkState) {
            }

            for (let i = 0; i < this.limitUserData.length; i++) {
                if (this.limitUserData[i].selected) {
                    let item = {};
                    this.userData.push(this.limitUserData[i]);
                }
            }
        }
    },
    watch: {
        userData(newValue) {
            console.log(newValue, "8888");

            if (newValue.length == 0) {
                // this.userData.push(this.addItem);
            }

            
        },
        showPop(newValue){
            if(!newValue) {
                this.userData.push(this.addItem);
            }
        }
                    

    },
    components: {
        XButton,
        XSwitch,
        Group,
        Flexbox,
        FlexboxItem,
        HDocCell,
        Popup,
        CheckIcon,
        Grid,
        GridItem
    }
};
</script>

<style>
.add_icon_cls {
    fill: #7a7e82;
}
.select_item_cls {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
}

.select_button_cls {
    position: relative;
}
</style>


<style lang="less" scoped>
.next_button_container_cls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 15px 0px 15px;
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

.display_user_cls {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
}
</style>