<template>

</template>


<script>
import Vue from "vue"
import VueRouter from "vue-router"
import $ from 'jquery'
import axios from "axios";
import store from "../store";

export default{
  data(){
    return{
      result: {
        category_name:""
      },
      category:[],
      img_base_url : store.state.img_base_url
    }
  },
  
  mounted() {

     let dataUrl = store.state.base_url + "Category/getAllCategory.php?key=123";
      axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.category = response.data.data;

      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  

};
   
</script>

<style>

</style>