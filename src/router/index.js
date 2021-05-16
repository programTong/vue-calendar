import VueRouter from 'vue-router'
import Vue from 'vue'

import Menu from "../components/Menu.vue";
import Search from "../components/Search.vue";
import Body from "../components/Body.vue";
import DayView from "../components/DayView.vue";
import MonthView from "../components/MonthView.vue";
import WeekView from "../components/WeekView.vue";
import Empty from "../components/Empty.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: Body,
        children: [
            {
                path: '',
                component: MonthView,
                meta: {
                    title: '月视图'
                },
            },
            {

                path: 'monthview',
                component: MonthView,
                meta: {
                    title: '月视图'
                },
            },

        ]
    },
    {
        path: '/menu',
        component: Menu,
        meta: {
            title: '菜单'
        },
    },
    {
        path: '/search',
        component: Search,
        meta: {
            title: '搜索'
        },
    },
    {
        path: '/body',
        component: Body,
        children: [
            {
                path: '',
                component: MonthView,
                meta: {
                    title: '月视图'
                },
            },
            {
                path: 'monthview',
                component: MonthView,
                meta: {
                    title: '月视图'
                },
            },
            {
                path: 'dayview',
                component: DayView,
                meta: {
                    title: '日视图'
                },
            },
            {
                path: 'weekview',
                component: WeekView,
                meta: {
                    title: '周视图'
                },
            },
            {
                path: 'empty',
                component: Empty,
                meta: {
                    title: ''
                },
            },
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router
