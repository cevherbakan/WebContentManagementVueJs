<template>
  <section id="blog" class="padd-section wow fadeInUp">
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center"><abbr>Duyurular</abbr></div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in result"
          :key="index"
          class="col-md-6 col-lg-4"
          style="margin-bottom: 10px"
        >
          <div class="block-blog text-left">
            
              <router-link :to="'/duyuru_detay?notice_id=' + item.id">
              <div style="min-height:170px;">
                <img
                  :src="img_base_url + item.img_url"
                  alt="img"
                />
              </div>
              </router-link>
              <div class="content-blog">
              <router-link :to="'/duyuru_detay?notice_id=' + item.id" style="font-size: 14px;" class="readmore">{{ item.header }}</router-link>
              <p style="
  white-space: nowrap;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  height:100%;
  ">{{ item.content }}</p>
              <p>{{ item.reg_date }}</p>
              <router-link :to="'/duyuru_detay?notice_id=' + item.id" tag="a" class="pull-right readmore">Daha fazla</router-link>
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
      result: [],
      situation: false,
      img_base_url : store.state.img_base_url
    };
  },
  created: function () {
    let datas = [];
    let dataUrl = store.state.base_url + "Notice/getByNumberNotices.php?key=123";
    return axios
      .post(dataUrl,JSON.stringify({number:3}))
      .then((response) => {
        //console.log(response);
        datas = response.data.data;

        this.result = datas;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  components: {
  },
};
</script>

<style>
</style>