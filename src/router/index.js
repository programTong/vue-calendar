import VueRouter from 'vue-router'
import Vue from 'vue'
import Menu from "../components/Menu.vue";
import Search from "../components/Search.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: 'menu',
        component: Menu
    },
    {
        path: 'search',
        component: Search
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
