<template>
    <div id="dashboard">
        <div>
            <div>
                <MessageVue :msg="msg" v-show="msg" />
            </div>
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
                    <div class="order-number">{{ eachOne . id }}</div>
                    <div>{{ eachOne . name }}</div>
                    <div>{{ eachOne . bread }}</div>
                    <div>{{ eachOne . meat }}</div>
                    <div>
                        <ul>
                            <li v-for="optional in eachOne.optionals" :key="optional">{{ optional }}</li>
                        </ul>
                    </div>
                    <div>
                        <select name="status" class="status" @change="updateOrder($event, eachOne.id)">
                            <option value="">Status</option>
                            <option v-for="eachStatus in status" :key="eachStatus.id" :value="eachStatus.name"
                                :selected="eachOne.status == eachStatus.name">{{ eachStatus . name }}</option>
                        </select>
                        <button class="btn-delete" @click="deleteOrder(eachOne.id)">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MessageVue from '../Message/Message.vue';
    export default {
        name: "dashboard",
        data() {
            return {
                msg: null,
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
            async getStatus() {
                const req = await fetch("http://localhost:3000/status");
                const data = await req.json();
                this.status = Array.from(data)
            },
            async deleteOrder(id) {
                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    method: "DELETE"
                })

                const res = await req.json();

                this.msg = `O pedido ${id} foi deletado com sucesso`

                setTimeout(() => this.msg = "", 10000);

                this.getOrders();
            },
            async updateOrder(event, id) {

                const option = event.target.value;

                const dataJson = JSON.stringify({
                    status: option
                });

                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: dataJson
                });

                const res = await req.json()

                this.msg = `O pedido ${id} foi atualizado  com sucesso`

                setTimeout(() => this.msg = "", 10000);
            }
        },
        mounted() {
            this.getOrders();
        },
        components: {
            MessageVue
        },
    };
</script>
<style scoped>
    @import "style.scss";
</style>
