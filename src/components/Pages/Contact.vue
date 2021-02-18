<template>
    <section id="contact" class="padd-section wow fadeInUp">
        <div class="container">
        <div class="section-title text-center">
          <div class="hr-title hr-long center"><abbr>İletişim</abbr> </div>
        </div>
        </div>
        <div class="col-lg-9 col-md-10 col-sm-10" style="margin:auto" v-html="'<div>'+result.google_map_location+'</div>'">


    </div>
    <br>

    <div class="container">
      <div class="row justify-content-center">

        <div class="col-lg-3 col-md-4">

          <div class="info">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>{{result.address}}</p>
            </div>

            <div class="email">
              <i class="fa fa-envelope"></i>
              <a href="mailto:contact.site_email">
              <p>{{result.site_email}}</p></a>
              <a href="mailto:contact.site_email2">
              <p>{{result.site_email2}}</p></a>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <a href="tel:contact.phone">
              <p>{{result.phone}}</p></a>
              <a href="tel:contact.phone">
              <p>{{result.phone2}}</p></a>
            </div>
          </div>

          <div class="social-links">
            <a :href='result.twitter' class="twitter"><i class="fa fa-twitter"></i></a>
            <a :href='result.facebook' class="facebook"><i class="fa fa-facebook"></i></a>
            <a :href='result.instagram' class="instagram"><i class="fa fa-instagram"></i></a>
            <a :href='result.fax' class="phone"><i class="fa fa-phone"></i></a>
            <a :href='result.linkedin' class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>

        </div>

        <div class="col-lg-5 col-md-8">
          <div class="form">
            <ContactForm/>
                      
          </div>
        </div>
      </div>
    </div>
  </section><!-- #contact -->

</template>



<script>
import axios from "axios";
import store from "../store";
import ContactForm from "../Content_components/ContactForm"

export default {
  data() {
    return {
      result: [],
      img_base_url : store.state.img_base_url
    };
  },
  methods:{
    },
  created: function () {
    let datas = [];
    let dataUrl = store.state.base_url + "Contact/getContactAllColumn.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
       // console.log(response);
        this.result = response.data.data;
      //console.log(this.result);

        
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  components: {
    ContactForm
  },
};
</script>

<style>
</style>