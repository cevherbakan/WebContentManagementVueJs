<template>
    <section id="about-us" class="about-us padd-section wow fadeInUp">
    <div class="detail">
   
        
        <div class="container">
       <p align="right">Projeler/{{result.id}}</p> 

    <div class="wow fadeInUp">
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
       
       <div class="carousel-inner" role="listbox" style="overflow:visible;">
      
        
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div style="background-size: auto 200px;" v-for="(img_item, i) in images" :key="i" :class="{'active':true, 'active':(i == 0)}"  class="carousel-item" v-bind:style="{  backgroundImage: 'url('+img_base_url + img_item.img_url + ')'  }" >
        </div>
      </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="color:black;"><i style="color:black;font-size:30px;" class="fa fa-arrow-left"></i></span>
            <span class="sr-only">Previous</span>
          </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                 <span class="carousel-control-prev-icon" aria-hidden="true" style="color:black;"><i style="color:black;font-size:30px;" class="fa fa-arrow-right"></i></span>
            <span class="sr-only">Next</span>
          </a>
    </div>


                <div class="col-md-9 col-lg-9 col-sm-9">
                    <div class="about-content">
                         <br>
                        <h2 align="center" style="color:gray;"><b>{{result.title}}</b></h2>
                        <p>{{result.content}}</p>
                        <p align="right">{{result.reg_date}}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
    data(){
        return {
            result:[],
            product_id:this.$route.query.service_id,
            images:[],
            img_base_url : store.state.img_base_url
        }
    },
  mounted: function () {

       window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});

          window.onpopstate = function(event) {
            location.reload()
      };
      
    let dataUrl = store.state.base_url + "Product/getByIdProduct.php?key=123";
    axios
      .post(dataUrl,JSON.stringify({id:this.product_id}))
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;

      })
      .catch((err) => {
        console.log(err.response);
      });

    dataUrl = store.state.base_url + "ProductImage/getForProductImage.php?key=123";
    axios
      .post(dataUrl,JSON.stringify({product_id:this.product_id}))
      .then((response) => {
        //console.log(response);
        this.images = response.data.data;

        //console.log(this.images);

      })
      .catch((err) => {
        console.log(err.response);
      });

  }
}
</script>