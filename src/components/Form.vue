<template>
  <div>
    <form @submit="submitForm($event)">   
      <input type="text" v-model="name"/>
      <br />
      <input type="text" v-model="email"/>
      <br />
      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
        name: "",
        email: ""
    }
  },
  methods: {
    submitForm(e){
        e.preventDefault();

        const name = this.name;
        const email = this.email;

        console.log(name)
        console.log(email)
    }
  },
};
</script>