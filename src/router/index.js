import VueRouter from 'vue-router'
import Vue from 'vue'
// import Menu from "../components/Menu.vue";
// import Search from "../components/Search.vue";
// import Body from "../components/Body.vue";
// import MonthView from "../components/MonthView.vue";
const Menu = () => import("../components/Menu.vue")
const Search = () => import("../components/Search.vue")
const Body = () => import("../components/Body.vue")
const MonthView = () => import("../components/MonthView.vue")
const DayView = () => import("../components/DayView.vue")

Vue.use(VueRouter)

const routes = [
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/body',
        component: Body,
        children: [
            {
                path: 'monthview',
                component: MonthView
            },
            {
                path: 'dayview',
                component: DayView
            },
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
