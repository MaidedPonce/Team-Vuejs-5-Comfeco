<template>
    <div class="flex-grow bg-purple-400">
        <div class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold">Login</h2>
                <p class="text-3md mt-2">Login into your page account</p>
            </div>
            <form action="">
                <div class="my-3">
                    <label for="" class="block text-gray-600 my-1">Email Address</label>
                    <input type="text" class="w-full text-gray-700 border border-green-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md" placeholder="homero@mail.com" />
                </div>
                <div class="my-3">
                    <label for="" class="block text-gray-600 my-1">Password</label>
                    <input type="password" class="w-full text-gray-700 border border-red-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md" placeholder="**************" />
                    <div>
                        <span class="text-xs text-red-400">This field is required</span>
                    </div>
                </div>
                <div class="flex justify-between my-4 md:my-6">
                    <div>
                        <input type="checkbox" id="remember" />
                        <label for="remember" class="text-gray-600 ml-3">Remember me</label>
                    </div>
                    <div>
                        <router-link to="/forgot-password" class="text-purple-500 font-semibold">Forgot Password?</router-link>
                    </div>
                </div>
                <button class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3">Login</button>
            </form>
            <!-- Social auth... -->
            <div class="text-center">
                <p class="text-gray-500 my-4">Or login with</p>
                <div class="grid grid-cols-2 gap-2 md:gap-8">
                    <button class="text-white bg-facebook py-2">Facebook</button>
                    <button class="text-white bg-twitter py-2">Twitter</button>
                </div>
            </div>
            <p class="text-gray-600 my-8 text-center">Don't have an account? <router-link to="/register" class="text-purple-500 font-semibold">Register</router-link></p>
        </div>
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