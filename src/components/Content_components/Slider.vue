<template>


<div class="wow fadeInUp">
    
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" v-for="(item, index) in result" :key="index" :data-slide-to="index" :class="{'active':true, 'active':(index == 0)}"></li>

  </ol>
  <div class="carousel-inner" style="height:500px;">
    <div style="height:100%;" class="carousel-item" v-for="(item, index) in result" :key="index" :class="{'active':true, 'active':(index == 0)}" v-bind:style="{  backgroundImage: 'url('+img_base_url + item.img_url + ')'  }">
       <div class="carousel-caption d-md-block" style="background-color : #0b0a0a78">
            <h2 style="font-size : 2rem;" class="display-4"  id="sliderhood">{{item.title}}</h2>
            <p class="lead" id="slidertext">{{item.content}}</p>
          </div>
    </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
</div>
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
    let dataUrl = store.state.base_url + "Slider/getAllSlider.php?key=123";
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
  
  },
                

};
</script>
