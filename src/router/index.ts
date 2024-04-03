import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/login',
        component: () => import('~/views/login/index.vue'),
        hidden: true
    },
    {
        //没写就是任意路由都是定向这个
        path:'',
        //重定向
        redirect:'/home'
    },
    { path: '/home', component: () => import( "~/components/Home.vue") },
    { path: '/about', component: () => import( "~/components/About.vue") },
    { path: '/shortenUrl', component: () => import( "~/views/shortenUrl/index.vue") }
]


// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
})

export default router;




