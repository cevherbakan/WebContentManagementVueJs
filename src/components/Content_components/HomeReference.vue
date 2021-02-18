<template>
<section id="features" class="padd-section text-center wow fadeInUp">

    <div class="container">
      <div class="section-title text-center">
<div class="hr-title-home hr-long center"><abbr>REFERANSLAR</abbr> </div>
      </div>
    </div>

    <div class="container">
       <div class="row">

      <div v-for="(item,index) in result" :key="index">
      <a :href= item.link item.logo_url target="_blank" slot="img_link">  
      <img style="max-height:120px;margin-right:10px;" slot="img" :src="img_base_url+item.img_url" alt="img">
          </a>
 
        </div>
 
       </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      result: [],
      img_base_url : store.state.img_base_url
    };
  },
  created: function() {

    let datas = [];
    let dataUrl = store.state.base_url + "CompanyReferences/getAllReferences.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        datas = response.data.data;

        this.result = datas;

      })
      .catch((err) => {
        console.log(err.response);
      });
  
  }
};
</script>
>