<template>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form @submit="request">
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" id="loginName" class="form-control" v-model="email" />
                    <label class="form-label" for="loginName">Email</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="loginPassword" class="form-control" v-model="password" />
                    <label class="form-label" for="loginPassword">Senha</label>
                </div>

                <!-- 2 column grid layout -->
                <div class="row mb-4">
                    <div class="col-md-6 d-flex justify-content-center">
                        <!-- Checkbox -->
                        <div class="form-check mb-3 mb-md-0">
                            <input class="form-check-input" type="checkbox" value="" id="loginCheck"
                                v-model="remember" />
                            <label class="form-check-label" for="loginCheck">Lembrar me</label>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex justify-content-center">
                        <!-- Simple link -->
                        <a href="#!">Esqueceu a senha?</a>
                    </div>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>
            </form>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "Login",
        data() {
            return {
                email: null,
                password: null,
                remember: null,
            }
        },
        methods: {
            async request(e) {
                e.preventDefault();

                const api = axios.create({
                    baseURL: 'http://127.0.0.1:8000/',
                });

                const data = {
                    email: this.email,
                    password: this.password
                }

                axios.get('/sanctum/csrf-cookie').then(async () => {
                    let response = await axios.post('/login', data)
                    console.log(response);
                });

            }
        },
        setup() {

        }
    }
</script>
<style scoped>
    @import "style.scss";
</style>
