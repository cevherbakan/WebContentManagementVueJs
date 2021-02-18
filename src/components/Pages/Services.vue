<template>
    <section id="get-started" class="padd-section text-center wow fadeInUp">
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center">
          <abbr>HİZMETLERİMİZ</abbr>
        </div>
      </div>
    </div>

        <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4"
          v-for="(item, index) in result"
          :key="index"
        >
          <div class="feature-block">   
            
            <div class="content-blog">
              <h4>
                <router-link :to="'/kategori?category_id=' + item.category_id">
                  {{ item.category_name }}
                </router-link>
              </h4>
              
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
            category_id : this.$route.params.category_id,
            images:[],
            img_base_url : store.state.img_base_url
        }
    },
  mounted: function () {

    let dataUrl = store.state.base_url + "Category/getAllCategory.php?key=123";
    axios
      .post(dataUrl,JSON.stringify({category_id:this.category_id}))
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;

      })
      .catch((err) => {
        console.log(err.response);
      });

    

  }
}
</script>