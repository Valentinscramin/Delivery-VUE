<template>
    <div>
        <div id="login">
          <LoginFormVue/>
        </div>
    </div>
</template>
<script>
    import LoginFormVue from '../../components/LoginForm/LoginForm.vue';
    export default {
        name: "Login",
        setup() {
            console.log("OI");
        },
        components:{
          LoginFormVue
        }
    };
</script>
<style scoped>
    @import "style.scss";
</style>
