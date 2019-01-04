import App from '@/App'

const entry = r => require.ensure([], () => r(require('./views/Entry.vue')), 'entry')
const handle = r => require.ensure([], () => r(require('./views/Handle.vue')), 'handle')
const transDetail = r => require.ensure([], () => r(require('./views/TransDetail.vue')), 'transDetail')
const next = r => require.ensure([], () => r(require('./views/Next.vue')), 'next')

const upgradePageDemo = r => require.ensure([], () => r(require('./views/UpgradePageDemo.vue')), 'approve')

const helpList = r => require.ensure([], () => r(require('./views/help/HelpList.vue')), 'helpList')
const helpDetail = r => require.ensure([], () => r(require('./views/help/HelpDetail.vue')), 'helpDetail')


export default {
    path: '',
    component: App, // 顶层路由，对应index.html
    children: [ // 二级路由。对应App.vue  跳转的页面在这里配置
        // 首页
        {
            path: '/entry',
            component: entry,
            meta: {
                keepAlive: true
            }
        },
        // 待办 已办
        {
            path: '/handle',
            component: handle
        },
        // 详情
        {
            path: '/transDetail',
            component: transDetail,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/upgradePage',
            component: upgradePageDemo
        },
        {
            path: '/helpList',
            component: helpList
        },
        {
            path: '/helpDetail',
            component: helpDetail
        },
        {
            path: '/next',
            component: next
        }
    ]
}