<template>
  <div>
    <BannerVue />
    <div id="home">
      <h1>Home</h1>
      <BurguerFormVue />
    </div>
  </div>
</template>
<script>
import BannerVue from "../../components/Banner/Banner.vue";
import BurguerFormVue from "../../components/BurguerForm/BurguerForm.vue";

export default {
  name: "Home",
  components: {
    BannerVue,
    BurguerFormVue,
  },
};
</script>
<style scoped>
@import "style.scss";
</style>