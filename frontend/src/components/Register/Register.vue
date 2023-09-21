<template>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
                <!-- Name input -->
                <div class="form-outline mb-4">
                    <input type="text" id="registerName" class="form-control" v-model="name"/>
                    <label class="form-label" for="registerName">Nome</label>
                </div>

                <!-- Username input -->
                <div class="form-outline mb-4">
                    <input type="text" id="registerUsername" class="form-control" v-model="lastname"/>
                    <label class="form-label" for="registerUsername">Sobrenome</label>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" id="registerEmail" class="form-control" v-model="email"/>
                    <label class="form-label" for="registerEmail">Email</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="registerPassword" class="form-control" v-model="password"/>
                    <label class="form-label" for="registerPassword">Senha</label>
                </div>

                <!-- Repeat Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="registerRepeatPassword" class="form-control" v-model="passwordRetype"/>
                    <label class="form-label" for="registerRepeatPassword">Repita a senha</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" v-model="contract"
                        aria-describedby="registerCheckHelpText" />
                    <label class="form-check-label" for="registerCheck">
                        Eu concordo com os termos e politicas.
                    </label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-block mb-3">Sign in</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Register",
        data(){
            return{
                name: null,
                lastname: null,
                email: null,
                password: null,
                passwordRetype: null,            
                contract: null
            }
        },
        methods: {
            async request(e){
                e.preventDefault();
                const data = {
                    name: this.name,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    passwordRetype: this.passwordRetype,            
                    contract: this.contract
                }

                // const req = await fetch("");
            }
        },
    }
</script>
<style scoped>
    @import "style.scss";
</style>
