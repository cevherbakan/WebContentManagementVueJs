<template>
  <header id="header" class="header header-hide">


<nav style="flex-flow: wrap" class="navbar navbar-expand-lg navbar-expand-lg navbar-light">


 
   
      <div id="logo" class="pull-left">
        <h1>
           <router-link v-on:click="scrollTop" class="nav-item active item" :to="'/'"
                  tag="a">
            <img
              align="left"
              id="logoepsilon"
              :src="img_base_url + result.logo_url"
              alt="Cps Soft"
            />
         </router-link>
        </h1>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav" style="margin:auto;">
      <li v-on:click="scrollTop" class="nav-item active item">
             <router-link class="nav-link" to='/'
              tag='a'>Anasayfa</router-link>
      </li>

      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Kurumsal
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link v-on:click="scrollTop" class="dropdown-item item" :to="'/misyon'"
                  tag="a">Misyonumuz</router-link>
                <router-link v-on:click="scrollTop" class="dropdown-item item" :to="'/vizyon/'">
                      Vizyonumuz
                </router-link>
                </div>
      </li>

      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Hizmetlerimiz
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link v-on:click="scrollTop" v-for="(item, index) in category" :key="index" class="dropdown-item item" :to="'/redirect?category_id='+ item.category_id"
                  tag="a">{{item.category_name}}</router-link>
        </div>
      </li>
<li v-on:click="scrollTop" class="nav-item active">
             <router-link class="nav-link item" to='/projelerimiz'
              tag='a'>Projelerimiz</router-link>
      </li>

      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Bizden Haberler
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link v-on:click="scrollTop" class="dropdown-item" to='/etkinlik'
                  tag="a">Etkinlikler</router-link>
                <router-link v-on:click="scrollTop" class="dropdown-item item" :to="'/duyuru/'">
                      Duyurular
                </router-link>
                </div>
      </li>

      <li v-on:click="scrollTop" class="nav-item active">
             <router-link class="nav-link item" to='/insan_kaynaklari'
              tag='a'>Ekibimiz</router-link>
      </li>

      <li v-on:click="scrollTop" class="nav-item active">
             <router-link class="nav-link item" to='/sss'
              tag='a'>SSS</router-link>
      </li>

      <li v-on:click="scrollTop"  class="nav-item active">
             <router-link class="nav-link item" to='/iletisim'
              tag='a'>İletişim</router-link>
      </li>

    </ul>

  </div>

        </nav>
  </header>
</template>



<script>
import Hmenu from "./H_menu";
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      result: [],
      category: [],
      img_base_url : store.state.img_base_url
    };
  },
  mounted: function () {
    let dataUrl =
      store.state.base_url + "General/getAllColumnGeneral.php?key=123";
    axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;
      })
      .catch((err) => {
        console.log(err.response);
      });

    dataUrl = store.state.base_url + "Category/getAllCategory.php?key=123";
    axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.category = response.data.data;
        
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    scrollTop: function(event){
       window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});

    }
  },
  components: {
    Hmenu,
  },
};
</script>
