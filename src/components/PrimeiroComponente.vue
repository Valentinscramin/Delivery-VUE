<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ name }} e minha profissão é {{ carrer }}</p>
  </div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      name: "Valentin",
      carrer: "Developer",
    };
  },
};
</script>