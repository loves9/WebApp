const state = {
    // 页面初始化参数 一般用于页面间传参
    rootParams: {}
}

// init state
if (window.localStorage['VUE_DEMO_USER']) {
    // state.user = JSON.parse(window.localStorage['VUE_DEMO_USER']);
}

export default state;
