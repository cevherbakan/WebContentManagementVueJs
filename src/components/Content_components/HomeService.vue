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
            <!--<router-link v-for="(img_item, i) in item.product_images" :key="i" :to="'/hizmetler_detay/' + item.id">-->
            <router-link :to="'/hizmetler_detay?service_id=' + item.id">
      
              <img v-if="item.product_images"
                :src="
                  img_base_url +
                  item.product_images.img_url
                "
                alt="img"
                class="img-fluid"
              />
            </router-link>

            <div class="content-blog">
              <h4>
                <router-link :to="'/hizmetler_detay?service_id=' + item.id">
                  {{ item.product_name }}
                </router-link>
              </h4>
              <p href="/hizmetler_detay">{{ item.content }}</p>
              <router-link :to="'/hizmetler_detay?service_id=' + item.id">
                Daha Fazla
              </router-link>
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
  data() {
    return {
      result: {
        product_images: {},
      },
      images: {},
      img_base_url : store.state.img_base_url
    };
  },
  methods: {},
  created: function () {
    let dataUrl = store.state.base_url + "Product/getByNumberProducts.php?key=123";
    axios
      .post(dataUrl,JSON.stringify({number:6}))
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;
        this.images = response.data.product_images;

        for (var i = 0; i < this.result.length; i++) {
          var key = true;
          var image_array = {};
          for (var j = 0; j < this.images.length; j++) {
            if ((this.result[i]["id"] == this.images[j]["product_id"])&& key==true) {
              image_array = this.images[j];
              key=false;
            }
          }
          this.result[i].product_images = image_array;
        }

        //console.log(this.result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

};
</script>
