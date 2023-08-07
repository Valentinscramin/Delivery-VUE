<template>
  <div>
    <PrimeiroComponenteVue />
    <LifeCycleVue />
    <PessoaVue />
  </div>
</template>

<script>
import LifeCycleVue from "./components/LifeCycle.vue";
import PessoaVue from "./components/Pessoa.vue";
import PrimeiroComponenteVue from "./components/PrimeiroComponente.vue";

export default {
  name: "App",
  components: {
    PrimeiroComponenteVue,
    LifeCycleVue,
    PessoaVue,
  },
};
</script>