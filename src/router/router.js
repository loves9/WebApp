import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/Home.vue')), 'home')
const approve = r => require.ensure([], () => r(require('../page/approve/Approve.vue')), 'approve')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '', 
            redirect: '/home'
        },
        //首页
        {
            path: '/home',
            component: home
        },
        {
            path: '/approve',
            component: approve
        }
    ]
}]