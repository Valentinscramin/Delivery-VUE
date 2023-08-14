<template>
  <div id="dashboard">
    <div>
      <div class="burguer-table-heading">
        <div class="order-id">#</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
      <div class="burguer-table-rows">
        <div v-for="eachOne in burgers" :key="eachOne.id" class="burguer-table-row">
          <div class="order-number">{{eachOne.id}}</div>
          <div>{{eachOne.name}}</div>
          <div>{{eachOne.bread}}</div>
          <div>{{eachOne.meat}}</div>
          <div>
            <ul>
              <li v-for="optional in eachOne.optionals" :key="optional">{{ optional }}</li>
            </ul>
          </div>
          <div>
            <select name="status" class="status">
              <option value="">Status</option>
              <option v-for="eachStatus in status" :key="eachStatus.id" :value="eachStatus.name" :selected="eachOne.status == eachStatus.name">{{eachStatus.name}}</option>
            </select>
            <button class="btn-delete">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  data() {
    return {
      burgers: null,
      burguer_id: null,
      status: []
    };
  },
  methods: {
    async getOrders() {
      const req = await fetch("http://localhost:3000/burgers");
      const data = await req.json();

      this.burgers = Array.from(data);
      this.getStatus();
    },
    async getStatus(){
        const req = await fetch("http://localhost:3000/status");
        const data = await req.json();
        this.status = Array.from(data)
    }
  },
  mounted() {
    this.getOrders();
  },
};
</script>
<style scoped>
    @import "style.scss";
</style>