import Vue from 'vue'
import VueRouter from 'vue-router'
import { publicPath, routerMode } from '@/config'

Vue.use(VueRouter)

var constantRoutes = [{
    path: '/',
    component: () =>
        import ('@/views/index')
}]

const router = new VueRouter({
    base: publicPath,
    mode: routerMode,
    scrollBehavior: () => ({
        y: 0,
    }),
    routes: constantRoutes,
})

export default router;