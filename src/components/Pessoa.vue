<template>
  <div>
    <div v-if="esta_trabalhando">
      <InfoVue />
      <FormVue />
    </div>
    <div v-else>
      <p>O usuario está em busca de novas oportunidades</p>
    </div>
  </div>
</template>

<script>
import FormVue from "./Form.vue";
import InfoVue from "./Info.vue";

export default {
  name: "Pessoa",
  data() {
    return {
      name: "Matheus",
      esta_trabalhando: true,
    };
  },
  components: {
    InfoVue,
    FormVue,
  },
};
</script>