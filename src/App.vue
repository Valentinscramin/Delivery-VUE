<template>
  <div>
    <NavBarVue :logo="logo_src" :alt="app_name" />
    <router-view />
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from "./components/Footer/Footer.vue";
import NavBarVue from "./components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBarVue,
    FooterVue,
  },
  data() {
    return {
      logo_src: "img/logo.png",
      app_name: "Delivery"
    }
  },
};
</script>
<style>
  @import 'style.scss';
</style>