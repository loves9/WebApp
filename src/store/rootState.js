const state = {
    user: {
        id: "",
        name: "",
        token: ""
    },

    list: {
        query: {
            page: 1,
            limit: 5,
            cate: null,
        },
        arrow: false,
        data: [],
        detail:{}
    }
}

// init state
if (window.localStorage['VUE_DEMO_USER']) {
    state.user = JSON.parse(window.localStorage['VUE_DEMO_USER']);
}

export default state;
