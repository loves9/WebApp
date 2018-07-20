/**
 * main route
 * 
 */

import App from '../App'

// 引入模块
import homeModuleRoutes from '@/module/home/router.js'
import exampleModuleRoutes from '@/module/example/router.js'

export default [
    {
        path: '/',
        component: App, //顶层路由，对应index.html
        children: [ //二级路由。对应App.vue
            //地址为空时跳转home页面
            {
                path: '',
                redirect: '/home'
            },
            

        ]
    },

    // 添加模块
    homeModuleRoutes,
    exampleModuleRoutes
]