<template>

</template>
<script>
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      category_id:this.$route.query.category_id,
      img_base_url : store.state.img_base_url
    };
      
 
  },

  mounted: function () {
    this.$router.replace('/kategori?category_id='+this.category_id); 
        

  }

};
</script>
