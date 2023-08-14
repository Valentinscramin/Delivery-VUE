<template>
  <div id="burguerForm">
    <form class="form" @submit="createDelivery">
      <div>
        <MessageVue :msg="msg" v-show="msg" />
      </div>
      <div>
        <label for="name">Nome do cliente:</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="nameBe"
          placeholder="Digite o seu nome"
        />
      </div>
      <div>
        <label for="bread">Escolha o pão:</label>
        <select name="bread" id="bread" v-model="breadBe">
          <option value="">Selecione seu pão</option>
          <option
            v-for="eachOne in bread"
            :key="eachOne.id"
            :value="eachOne.name"
          >
            {{ eachOne.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="meat">Escolha a carne:</label>
        <select name="meat" id="meat" v-model="meatBe">
          <option value="">Selecione a carne</option>
          <option
            v-for="eachOne in meat"
            :key="eachOne.id"
            :value="eachOne.name"
          >
            {{ eachOne.name }}
          </option>
        </select>
      </div>
      <div class="optionals-container">
        <label for="optionals">Escolha os opcionais:</label>
        <div class="checkbox" v-for="eachOne in optionals" :key="eachOne.id">
          <input
            type="checkbox"
            name="optionals"
            id="optionals"
            v-model="optionalsBe"
            :value="eachOne.name"
          />
          <span>{{ eachOne.name }}</span>
        </div>
      </div>
      <div>
        <input type="submit" class="btn-submit" value="Criar meu Burguer" />
      </div>
    </form>
  </div>
</template>
<script>
import MessageVue from "../Message/Message.vue";
export default {
  name: "BurguerForm",
  data() {
    return {
      name: null,
      bread: null,
      meat: null,
      optionals: null,
      nameBe: null,
      breadBe: null,
      meatBe: null,
      optionalsBe: [],
      status: "Solicitado",
      msg: null,
    };
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredients");
      const data = await req.json();

      this.bread = data.bread;
      this.meat = data.meat;
      this.optionals = data.optionals;
    },
    async createDelivery(e) {
      e.preventDefault();
      const data = {
        name: this.nameBe,
        bread: this.breadBe,
        meat: this.meatBe,
        optionals: Array.from(this.optionalsBe),
        status: this.status,
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      this.msg = `Pedido numero ${res.id} realizado com sucesso`;

      setTimeout(()=> this.msg = "", 10000);


        (this.nameBe = null),
        (this.breadBe = null),
        (this.meatBe = null),
        (this.optionalsBe = null);
    },
  },
  mounted() {
    this.getIngredients();
  },
  components: {
    MessageVue,
  },
};
</script>

<style scoped>
@import "style.scss";
</style>