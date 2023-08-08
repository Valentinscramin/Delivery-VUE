<template>
  <div>
    <PictureVue />
    <h2>Está é a descrição de {{ name }}</h2>
    <p>Estou trabalhando no momento.</p>
    <p>E sei trabalhar com as seguintes linguagens</p>
    <ul>
      <li v-for="(eachOne, index) in backend_technologies" :key="index">
        {{ eachOne }}
      </li>
    </ul>
    <ul>
      <li
        v-for="eachOne in front_technologies"
        :key="eachOne.id"
        @click="mostrarId(eachOne.id)"
      >
        {{ eachOne.name }}
      </li>
    </ul>
     <p v-show="mostrar_id">
      {{ selected_id }}
    </p>
    <button @click="mostrarPortifolio">{{ texto_botao }}</button>
    <p v-show="mostrar_portifolio">
      para acessar meu portifolio
      <a :href="meu_link" target="_blank">clique aqui</a>
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
      mostrar_portifolio: false,
      texto_botao: "Mostrar portifolio",
      mostrar_id: false,
      selected_id: "",
      backend_technologies: ["PHP", "Java", "Python", "JavaScript"],
      front_technologies: [
        { id: 1, name: "css" },
        { id: 2, name: "scss" },
        { id: 3, name: "vue3.js" },
      ],
    };
  },
  components: {
    PictureVue,
  },
  methods: {
    mostrarId(id) {
      this.mostrar_id = true
      this.selected_id = id
    },
    mostrarPortifolio() {
      this.mostrar_portifolio = !this.mostrar_portifolio;
      if (!this.mostrar_portifolio) {
        this.texto_botao = "Mostrar portifolio";
      } else {
        this.texto_botao = "Esconder portifolio";
      }
    },
  },
};
</script>