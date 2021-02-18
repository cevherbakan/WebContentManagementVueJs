<template>
    <section id="team" class="padd-section text-center wow fadeInUp">

        <div class="container">
        <div class="section-title text-center">

            <div class="hr-title hr-long center"><abbr>Ekibimiz</abbr> </div>

        </div>
        </div>

        <div class="container">
        <div class="row justify-content-center">
        <div v-for="(item, index) in result"
          :key="index" class="col-md-4 col-sm-6 col-lg-3">
            <div class="team-block bottom">
                <img style="max-height:275px;" :src="img_base_url+item.img_url" class="img-responsive" alt="img">
                <div class="team-content">
                <ul class="list-unstyled">
                    <li><a :href='item.facebook'><i class="fa fa-facebook"></i></a></li>
                    <li><a :href='item.twitter'><i class="fa fa-twitter"></i></a></li>
                    <li><a :href='item.twitter'><i class="fa fa-linkedin"></i></a></li>
                </ul>
                <span>{{item.position}}</span>
                <h4>{{item.name}}</h4>
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
import Form from "./Form";

export default {
  data() {
    return {
      result: [],
      situation: false,
      img_base_url : store.state.img_base_url
    };
  },
  mounted: function () {
    let datas = [];
    let dataUrl = store.state.base_url + "Team/getAllTeam.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        datas = response.data.data;

        this.result = datas;
      })
      .then((response) => {
        setTimeout(() => (this.situation = false), 5000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  components: {
          Form,
  },
};
</script>

<style>
</style>