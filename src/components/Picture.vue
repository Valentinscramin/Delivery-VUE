<template>
  <div>
    <img :src="avatar_png" :alt="descricao" />
  </div>
</template>
<script>
export default {
  name: "Picture",
  data() {
    return {
        avatar_png: "/img/avatar.png",
        descricao: "Avatar do Valentin"
    };
  },
};
</script>