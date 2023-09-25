<template>
  <div id="message">
    {{ msg }}
  </div>
</template>
<script>
export default {
  name: "message",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
@import "style.scss";
</style>