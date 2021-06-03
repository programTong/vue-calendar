import VueRouter from 'vue-router'
import Vue from 'vue'

import Menu from "../components/Menu.vue";
import Search from "../components/Search.vue";
import Body from "../components/Body.vue";
// import DayView from "../components/DayView.vue";
import MonthView from "../components/MonthView.vue";
// import WeekView from "../components/WeekView.vue";
import Empty from "../components/Empty.vue";
import AddRecord from "../components/AddRecord.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import RecordView from "../components/RecordView.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: Login,
        meta: {
            title: '登录'
        },
    },
    {
        path: '/menu',
        component: Menu,
        meta: {
            title: '菜单'
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录'
        },
    },
    {
        path: '/register',
        component: Register,
        meta: {
            title: '注册'
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
        path: '/addrecord',
        component: AddRecord,
        meta: {
            title: '添加日程'
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
                path: 'recordview',
                component: RecordView,
                meta: {
                    title: '日程视图'
                },
            },
            // {
            //     path: 'dayview',
            //     component: DayView,
            //     meta: {
            //         title: '日视图'
            //     },
            // },
            // {
            //     path: 'weekview',
            //     component: WeekView,
            //     meta: {
            //         title: '周视图'
            //     },
            // },
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
