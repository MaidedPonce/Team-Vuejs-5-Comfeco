<template>
    <div class="flex-grow bg-purple-500">
        <div class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold">Register</h2>
                <p class="text-3md mt-2">Create an account</p>
            </div>
            <form action="">
                <div class="my-3">
                    <label for="" class="block text-gray-600 my-1">Username</label>
                    <input type="text" class="w-full text-gray-700 border border-green-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md" placeholder="homero" />
                </div>
                <div class="my-3">
                    <label for="" class="block text-gray-600 my-1">Email Address</label>
                    <input type="text" class="w-full text-gray-700 border border-red-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md" placeholder="homero@mail.com" />
                    <div>
                        <span class="text-xs text-red-400">This field is required</span>
                    </div>
                </div>
                <div class="my-3">
                    <label for="" class="block text-gray-600 my-1">Password</label>
                    <input type="password" class="w-full text-gray-700 border border-gray-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md" placeholder="**************" />
                </div>
                <div class="my-3">
                    <label for="" class="block text-gray-600 my-1">Confirm Password</label>
                    <input type="password" class="w-full text-gray-700 border border-gray-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md" placeholder="**************" />
                </div>
                <button class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3">Register</button>
            </form>
            <!-- Social auth... -->
            <div class="text-center">
                <p class="text-gray-500 my-4">Or register with</p>
                <div class="grid grid-cols-2 gap-2 md:gap-8">
                    <button class="text-white bg-facebook py-2">Facebook</button>
                    <button class="text-white bg-twitter py-2">Twitter</button>
                </div>
            </div>
            <p class="text-gray-600 my-8 text-center">Have an account? <router-link to="/login" class="text-purple-500 font-semibold">Login</router-link></p>
            <div class="text-sm text-gray-600 text-center mt-6">
                <p>Al registrarte estas aceptando los <a href="#" class="text-purple-500 font-semibold">Terminos y condiciones</a> y las <a href="#" class="text-purple-500 font-semibold">Politicas de privacidad y proteccion de datos</a> de COMFECO</p>
            </div>
        </div>
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