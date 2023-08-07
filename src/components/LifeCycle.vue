<template>
  <div>
    <h1>Meu nome é {{ name }}</h1>
  </div>
</template>
<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "LifeCycle",
    };
  },
  created() {
    setTimeout(() => {
        this.name = 'Valentin'
    }, 5000)
  },
  mounted() {
    this.name = 'Pedro'
  },
};
</script>