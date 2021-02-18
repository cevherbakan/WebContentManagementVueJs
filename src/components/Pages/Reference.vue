<template>
<section id="features" class="padd-section text-center wow fadeInUp">

    <div class="container">
      <div class="section-title text-center">
<div class="hr-title hr-long center"><abbr>REFERANSLAR</abbr> </div>
      </div>
    </div>

    <div class="container">
      <div class="owl-carousel owl-theme">
      <ReferenceItem>
      <a href="https://tuga.com.tr/" target="_blank" slot="img_link">  <img slot="img" src="img/tuga-logo.png" alt="img" class="img-fluid">  </a>
 
      </ReferenceItem>
      <ReferenceItem>
      <a href="http://linatek.com.tr/" target="_blank" slot="img_link">  <img slot="img" src="img/linatek-logo.png" alt="img" class="img-fluid">  </a>
 
      </ReferenceItem>

    
      <ReferenceItem>
      <a slot="img_link">  <img slot="img" src="img/svg/drone3.svg" alt="img" class="img-fluid">  </a>
 
      </ReferenceItem>
      <ReferenceItem>
      <a slot="img_link">  <img slot="img" src="img/svg/drone3.svg" alt="img" class="img-fluid">  </a>
 
      </ReferenceItem>
      <ReferenceItem>
      <a slot="img_link">  <img slot="img" src="img/svg/drone3.svg" alt="img" class="img-fluid">  </a>
 
      </ReferenceItem>
      </div>
      
    </div>
  </section>
</template>
<script>
    import ReferenceItem from "../Models/ReferenceItem";
       export default {
       components: {
        ReferenceItem
        }
    }
</script>

<style>
</style>