<template>
<div class="signUp">
    <h1>Registrate</h1>
    <input v-model="nick" type="nick" placeholder="Nick">
    <input v-model="email" type="email" placeholder="Email">
    <div>
  <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
    <label class="form__label">Password</label>
    <input class="form__input" v-model.trim="$v.password.$model"/>
  </div>
  <div class="error" v-if="!$v.password.required">Password is required.</div>
  <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
  <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
    <label class="form__label">Repeat password</label>
    <input class="form__input" v-model.trim="$v.repeatPassword.$model"/>
  </div>
  <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
  <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
</div>
    <button @click="signUp">Registrarse</button>
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
    export default {
        name: 'SignUp',
        data(){
            return {
                nick: '',
                email: '',
                password: '',
                repeatPassword: ''
            }
        },
        validations: {
            password: {
                required,
                minLength: minLength(12)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            }
        },
        methods: {
            signUp(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password, this.confirm)
                    .then((user) => {
                            alert('Usuario creado satisfactoriamente')
                         })
                            .catch((error) => {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                        });
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