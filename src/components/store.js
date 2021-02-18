import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import { router } from "../router"

Vue.use(Vuex)

const store = new Vuex.Store({

    state : {
        base_url : "https://api/CpsApi/",
        img_base_url :"https://img/img/"
    }

})

export default store