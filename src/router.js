import Vue from "vue"
import VueRouter from "vue-router"

import Homepage from "./components/Pages/Homepage"
import Mission from "./components/Pages/Mission"
import Vision from "./components/Pages/Vision"
import Services from "./components/Pages/Services"
import CategoryService from "./components/Pages/CategoryService"
import Project from "./components/Pages/Project"
import News from "./components/Pages/News"
import Notices from "./components/Pages/Notices"
import Team from "./components/Pages/Team"
import Faq from "./components/Pages/Faq"
import Contact from "./components/Pages/Contact"
import ServiceDetail from "./components/Detail/ServiceDetail"
import ProjectDetail from "./components/Detail/ProjectDetail"
import ReferenceDetail from "./components/Detail/ReferenceDetail"
import NewsDetail from "./components/Detail/NewsDetail"
import NoticeDetail from "./components/Detail/NoticeDetail"
import Redirect from "./components/Pages/Redirect"
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery



Vue.use(VueRouter)

const routes =  [
        {
            path: '/',
            name: '/',
            component: Homepage,

        },
        {
            path: '*',
            name: 'home',
            component: Homepage,

        },
        {
            path: '/anasayfa',
            name: 'anasayfa',
            component: Homepage,

        },
        {
            path: '/misyon',
            name: 'misyon',
            component: Mission,   
        },
        {
            path: '/vizyon',
            name: 'vizyon',
            component: Vision,   
        },
        {
            path: '/hizmetler',
            name: 'hizmetler',
            component: Services,   
        },
        {
            path: '/kategori/:category_id?',
            name: 'kategori',
            component: CategoryService,
            props: true
        },
        {
            path: '/projelerimiz',
            name: 'projelerimiz',
            component: Project,   
        },
        {
            path: '/etkinlik',
            name: 'etkinlik',
            component: News,   
        },
        {
            path: '/duyuru',
            name: 'duyuru',
            component: Notices,   
        },
        {
            path: '/insan_kaynaklari',
            name: 'insan_kaynaklari',
            component: Team,   
        },
        {
            path: '/sss',
            name: 'sss',
            component: Faq,   
        },
        {
            path: '/iletisim',
            name: 'iletisim',
            component: Contact,   
        },
        {
            path: '/hizmetler_detay/:service_id?',
            name: 'hizmetler_detay',
            component: ServiceDetail,   
        },
        {
            path: '/projeler_detay/:project_id?',
            name: 'projeler_detay',
            component: ProjectDetail,   
        },
        {
            path: '/referans_detay/:reference_id?',
            name: 'referans_detay',
            component: ReferenceDetail,   
        },
        {
            path: '/etkinlik_detay/:new_id?',
            name: 'etkinlik_detay',
            component: NewsDetail,   
        },
        {
            path: '/duyuru_detay/:notice_id?',
            name: 'duyuru_detay',
            component: NoticeDetail,   
        },
        {
            path: '/redirect/:category_id?',
            name: 'redirect',
            component: Redirect,   
        }
    ];
    export const router = new VueRouter({ mode : 'history',
    base:"/",


    routes });


