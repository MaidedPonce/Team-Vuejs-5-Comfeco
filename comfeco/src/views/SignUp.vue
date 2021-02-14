<template>
<div class="signUp">
    <h1>Registrate</h1>
    <form>
        <div>
        <div class="form-group" :class="{ 'form-group--error': $v.nick.$error }">
            <label for="nick">Nickname</label>
             <input v-model="nick" v-model.trim="$v.nick.$model" placeholder="Nickname" name="nick"/>
        </div>
        <div class="error" v-if="!$v.nick.required">Nickname is required.</div>
  <div class="error" v-if="!$v.nick.minLength">Nickname must have at least {{ $v.nick.$params.minLength.min }} letters.</div>
        
        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
            <label for="email">Email</label>
             <input v-model="email" v-model.trim="$v.email.$model" placeholder="Email" name="email"/>
        </div>
             <div class="error" v-if="!$v.email.required">Email is required.</div>

  <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
    <label class="form__label">Password</label>
    <input v-model="password" v-model.trim="$v.password.$model" type="password" placeholder="password" name="password"/>
  </div>
  <div class="error" v-if="!$v.password.required">Password is required.</div>
  <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
  <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
    <label class="form__label">Repeat password</label>
    <input class="form__input" v-model.trim="$v.repeatPassword.$model" type="password" placeholder="password" name="password"/>
  </div>
  <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
  <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
</div>
    </form>
        <button @click="signUp">Registrarse</button>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'
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
            nick: {
                required,
                minLength: minLength(4)
            },
            email: {
                required,
                email,
                isUnique(value) {
                    if(value === '') return true
                    var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(email_regex.test(value))
                        }, 350 + Math.random() * 300)
                    })
                }
            },
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
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then((user) => {
                            alert('Usuario creado satisfactoriamente')
                         })
                            .catch((error) => {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                alert(errorMessage)
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