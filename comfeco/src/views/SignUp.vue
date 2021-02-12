<template>
<div class="signUp">
    <h1>Registrate</h1>
    <input v-model="nick" type="nick" placeholder="Nick">
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <input v-model="confirm" type="confirm" placeholder="Confirm">
    <button @click="signUp">Registrarse</button>
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
    export default {
        name: 'SignUp',
        data(){
            return {
                nick: '',
                email: '',
                password: '',
                confirm: ''
            }
        },
        methods: {
            signUp(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        alert('Usario creado')
                    },
                    (err) => {
                        alert('No se creo correctamente')
                    }
                )
            }
        }
    }
</script>

<style>
    .signUp {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px;
    min-height: calc(100vh - 200px); 
}
</style>