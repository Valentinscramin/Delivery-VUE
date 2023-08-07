<template>
  <div>
    <PictureVue />
    <h2>Está é a descrição de {{ name }}</h2>
    <p>Estou trabalhando no momento.</p>
    <p>E sei trabalhar com as seguintes linguagens</p>
    <ul>
      <li>Javascript</li>
      <li>PHP</li>
      <li>Java</li>
      <li>Python</li>
    </ul>
    <p>
      para acessar meu portifolio
      <a v-bind:href="meu_link" target="_blank">clique aqui</a>
    </p>
  </div>
</template>
<script>
import PictureVue from "./Picture.vue";
export default {
  name: "Info",
  data() {
    return {
      meu_link: "https://github.com/Valentinscramin/",
    };
  },
  components: {
    PictureVue,
  },
};
</script>