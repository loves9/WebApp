import App from './App'

const QueryInfo = r => require.ensure([], () => r(require('./views/QueryInfo.vue')), '查询')
const ExSubView = r => require.ensure([], () => r(require('./views/ExSubView.vue')), '示例')


export default {
    path: '/query',
    component: App, // 顶层路由，对应index.html
    children: [ // 二级路由。对应App.vue  跳转的页面在这里配置
        // 查询
        {
            path: '/query',
            component: QueryInfo
        },
        {
            path: '/exsub',
            component: ExSubView
        }

    ]
}