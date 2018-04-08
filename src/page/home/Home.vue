<template>

    <div id="app" >

       <group title="">
        <popup-picker :title="title1" :data="list1" v-model="value1" @on-change="change1"></popup-picker>
        <popup-picker :title="title2" :data="list2" v-model="value2"></popup-picker>
        <popup-picker :title="title3" :data="list3" v-model="value3"></popup-picker>
        <datetime v-model="value4" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change4" :title="title4"></datetime>
        <datetime v-model="value5" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change5" :title="title5"></datetime>
       </group>
       <!-- <div v-transfer-dom>
        <loading :show="loadingShow" :text='loadingtText'></loading>
       </div> -->
       <!-- <toast type="text" :time="800" is-show-mask text="Hello World">{{ $t('Basic Usage') }}</toast> -->
       <div style="bottom:0;position:absolute; width:100%">
           <flexbox orient="honrizontal" :gutter="0">
            <flexbox-item><div class="button" @click="clickLeftBtn">重置</div></flexbox-item>
            <flexbox-item><div class="button" @click="clickRightBtn">查询</div></flexbox-item>
           </flexbox>
       </div>

    </div>
</template>
<script>
import {
  Radio,
  Drawer,
  Group,
  Cell,
  ViewBox,
  XHeader,
  Toast,
  Picker,
  PopupPicker,
  Datetime,
  Flexbox,
  FlexboxItem,
  Loading
} from "vux";
import index from "vue";

export default {
  components: {
    Radio,
    Drawer,
    Group,
    Cell,
    ViewBox,
    XHeader,
    Toast,
    Picker,
    PopupPicker,
    Datetime,
    Flexbox,
    FlexboxItem,
    Loading
  },
  data() {
    return {
      reuestParam: {
        1: ""
      },
      title1: "单据类型",
      value1: ["选择"],
      list1: [[]],
      dataSource1: [],

      title2: "费用类别",
      value2: ["选择"],
      list2: [
        ["小米", "iPhone", "华为", "情怀", "三星", "其他", "不告诉你"],
        ["小米1", "iPhone2", "华为3", "情怀4", "三星5", "其他6", "不告诉你7"]
      ],

      title3: "审批状态",
      value3: ["选择"],
      list3: [
        ["小米", "iPhone", "华为", "情怀", "三星", "其他", "不告诉你"],
        ["小米1", "iPhone2", "华为3", "情怀4", "三星5", "其他6", "不告诉你7"]
      ],

      title4: "起始时间",
      value4: "选择",

      title5: "结束时间",
      value5: "选择"
    };
  },
  mounted() {
    var me = this;
    this.$vux.loading.show({
      text: "Loading"
    });
    MXCommon.ajax({
      type: "POST",
      url: "http://10.1.1.118/jiuqiapp/flow_info_app",
      data: {
        action: "billtype",
        type: 1
      },
      dataType: "json",
      async: true,
      complete: function() {
        me.$vux.loading.hide();
      },
      success: function(data, status, xhr) {
        data = JSON.parse(data);
        me.dataSource1 = data.billtype;
        for (var index in data.billtype) {
          me.list1[0].push(data.billtype[index].text);
        }
      },
      error: function(data, status, xhr) {}
    });
  },
  methods: {
    clickRightBtn() {
      this.$vux.toast.text("请选择", "middle");
    },
    clickLeftBtn() {
      this.$vux.toast.text("已重置", "middle");
    },

    change1(value) {
      console.log("new Value111", value);

      alert(this.getValueWithKey(value));
    },

    change4(value) {
      console.log("new Value", value);
    },
    change5(value) {
      console.log("new Value", value);
    },

    getValueWithKey(key) {
      for (var index in this.dataSource1) {
        if (this.dataSource1[index].text == key) {
          return this.dataSource1[index].value;
        }
      }

      return "";
    }
  },
  computed: {}
};
</script>
<style lang='less'>
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  background-color: #fbf9fe;
}
#app {
  height: 100%;
}

.button {
  font-size: 16px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
