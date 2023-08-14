<template>
  <div id="pedidos">
    <h1>Gerenciar pedidos</h1>
    <DashboardVue />
  </div>
</template>
<script>
import DashboardVue from "../../components/Dashboard/Dashboard.vue";

export default {
  name: "Pedidos",
  components: {
    DashboardVue,
  },
};
</script>
<style scoped>
@import "style.scss";
</style>