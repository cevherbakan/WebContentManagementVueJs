<template>
  <section id="get-started" class="padd-section text-center wow fadeInUp">
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center">
          <abbr>PROJELERİMİZ</abbr>
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
            <!--<router-link v-for="(img_item, i) in item.project_images" :key="i" :to="'/hizmetler_detay/' + item.id">-->
            <router-link :to="'/projeler_detay?project_id=' + item.id">
      
              <img v-if="item.project_images"
                :src="
                  img_base_url +
                  item.project_images.img_url
                "
                alt="img"
                class="img-fluid"
              />
            </router-link>

            <div class="content-blog">
              <h4>
                <router-link :to="'/projeler_detay?project_id=' + item.id">
                  {{ item.project_name }}
                </router-link>
              </h4>
              <p href="/projeler_detay">{{ item.content }}</p>
              <router-link :to="'/projeler_detay?project_id=' + item.id">
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
        project_images: {},
      },
      images: {},
      img_base_url : store.state.img_base_url
    };
  },
  methods: {},
  mounted: function () {
    let dataUrl = store.state.base_url + "OurProject/getAllOurProjects.php?key=123";
    axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;
        this.images = response.data.project_images;

        for (var i = 0; i < this.result.length; i++) {
          var key = true;
          var image_array = {};
          for (var j = 0; j < this.images.length; j++) {
            if ((this.result[i]["id"] == this.images[j]["project_id"])&& key==true) {
              image_array = this.images[j];
              key=false;
            }
          }
          this.result[i].project_images = image_array;
        }

        //console.log(this.result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

};
</script>
