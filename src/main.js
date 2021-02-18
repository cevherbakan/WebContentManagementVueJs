import Vue from 'vue'
import App from './App.vue'
import { router } from "./router"
import store from "./components/store"
import $ from 'jquery'


new Vue({
    el: '#app',
    router,
    store,
    $,
    render: h => h(App),
})
