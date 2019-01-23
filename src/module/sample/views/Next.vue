<template>
  <div>
    <div style="background-color:#fff; padding:20px 15px 20px; 15px;">
      <div>
        <span style="font-size:14px; color:#606266">请确认下一步任务的办理人</span>
      </div>
      <span style="font-size:18px">"部门领导审批"</span>
    </div>

    <div style="background-color: #fff; margin-top:10px">

      <h-person-selector
        :limited="true"
        :limitUserDataSource="limitUserData"
        @selectedPersonChanged="selectedUser"
      ></h-person-selector>

    </div>

    <group>
      <x-switch
        title="邮件提醒"
        v-model="mailValue"
      ></x-switch>
      <x-switch
        title="融讯通提醒"
        v-model="imValue"
      ></x-switch>
      <x-switch
        title="短信提醒"
        v-model="phoneMessageValue"
      ></x-switch>
    </group>

    <div class="next_button_container_cls">
      <x-button
        class="button_cls"
        @click.native="leftButtonClick"
      >返回</x-button>
      <x-button
        type="primary"
        class="button_cls"
        style="color:#fff; margin-top:10px"
        @click.native="rightButtonClick"
      >确定</x-button>
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
import { HDocCell, HPersonSelector } from "hrkj-vux-components";

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
    onItemClick() {},
    deletUser(item) {
      console.log(item);
      // this.userData.pop(item);

      var temArr = [];
      for (let i = 0; i < this.userData.length; i++) {
        if (this.userData[i].name != item.name) {
          temArr.push(this.userData[i]);
        }
      }
      this.userData = temArr;

      for (let i = 0; i < this.limitUserData.length; i++) {
        if (this.limitUserData[i].name == item.name) {
          this.limitUserData[i].selected = false;
        }
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

      item.selected = !item.selected;

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
    showPop(newValue) {
      if (!newValue) {
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
    GridItem,
    HPersonSelector
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
  // padding: 0px 15px 0px 15px;

  position: fixed;
  bottom: 0;
  width: 100%;
}

.button_cls {
  height: 52px;
  width: 100%;
  flex: 1;
  margin: 10px 0px 0px 0px;
}

.button_agree_cls {
  background-color: #298ccf;
  // margin-left: 2px;
}

.display_user_cls {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
}
</style>