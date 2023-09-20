<template>
    <div id="navbar">
        <router-link to="/" class="logo-url">
            <img :src="logo" :alt="alt" class="logo-img">
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
        <router-link to="/login">Login/Registrar</router-link>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>

<style scoped>
    @import "style.scss";
</style>