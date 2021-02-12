<template>
<div class="login">
    <h1>Entrar</h1>
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">Entrar</button>
</div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login(){

            }
        }
    }
</script>