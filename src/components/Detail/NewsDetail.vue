<template>
    <section id="about-us" class="about-us padd-section wow fadeInUp">
    <div class="detail">
        

        <div class="container">
            <p align="right">Etkinlik {{result.id}}</p>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <img :src="img_base_url + result.img_url"
                  alt="img"/>
                </div>

                <div class="col-md-12">
                    <div class="about-content">
                      <br>
                        <h2 align="center" style="color:gray;"><b>{{result.header}}</b></h2>
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
            new_id:this.$route.query.new_id,
            img_base_url : store.state.img_base_url
        }
    },
  mounted: function () {
       window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
    this.new_id=this.$route.query.new_id;
    let dataUrl = store.state.base_url + "NewClass/getByIdNew.php?key=123";
    return axios
      .post(dataUrl,JSON.stringify({id:this.new_id}))
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