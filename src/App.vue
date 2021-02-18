<template>
    <div>

    <Header/>
        <router-view> </router-view>

    <Footer/>
    

    </div>
</template>
<script>
    import Header from "./components/default/Header";
    import Footer from "./components/default/Footer";
    import $ from 'jquery';
    

       export default {

    components: {
            Header,
            Footer
        }
    }
</script>