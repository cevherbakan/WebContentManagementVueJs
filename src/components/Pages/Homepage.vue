<template>
    <div>
        <Slider/>
        <HomeService/>
        <HomeNews/>
        
        <HomeNotices/>
        <HomeReference/>
    </div>
</template>

<script>
    import Slider from "../Content_components/Slider";
    import HomeNews from "../Content_components/HomeNews";
    import HomeNotices from "../Content_components/HomeNotices";
    import HomeService from "../Content_components/HomeService";
    import HomeReference from "../Content_components/HomeReference";

       export default {
  
       components: {
        Slider,
        HomeNews,
        HomeNotices,
        HomeService,
        HomeReference

        }
    }
</script>