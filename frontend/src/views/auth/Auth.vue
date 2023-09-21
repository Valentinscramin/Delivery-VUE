<template>
    <div>
        <div id="auth">
            <div class="loginForm col-md-4">
                <!-- Pills navs -->
                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation" v-for="tab in tabs" :key="tab" @click="selected = tab">
                        <a class="nav-link" id="tab-login" data-mdb-toggle="pill" role="tab"
                            aria-controls="pills-login" aria-selected="true">
                            {{ tab }}
                        </a>
                    </li>
                </ul>
                <component :is="selected" class="tab"></component>
            </div>
        </div>
    </div>
</template>
<script>
    import Login from '../../components/Login/Login.vue';
    import Register from '../../components/Register/Register.vue';

    export default {
        name: "Auth.vue",
        data: function() {
            return {
                tabs: ["Login", "Register"],
                selected: "Login"
            };
        },
        components: {
            Login,
            Register
        }
    };
</script>
<style scoped>
    @import "style.scss";
</style>
