<template>
    <div class="grid grid-cols-1">
        <div class="w-full bg-blue-600 bg-cover bg-center auth-bg">
            <div class="w-full h-full items-center bg-blue-600 bg-opacity-80">
                <div class="px-10 py-12">
                    <h1 class="text-white text-3xl font-semibold my-5">Welcome back!</h1>
                    <p class="text-white text-1sm">We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.</p>
                </div>
            </div>
        </div>
        <div>
            <figure>
                <!-- <img src="" alt="" /> -->
                <span>logo</span>
            </figure>
            <form action="">
                <div>
                    <label for="" class="block">Username</label>
                    <input type="text">
                </div>
                <div>
                    <label for="" class="block">Email</label>
                    <input type="text">
                </div>
                <div>
                    <label for="" class="block">Password</label>
                    <input type="text">
                </div>
                <div>
                    <label for="" class="block">Confirm Password</label>
                    <input type="text">
                </div>
                <button>Login</button>
            </form>
            <div>
                <a href="">Terms</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .auth-bg {
        background-image: url('../assets/auth.jpg');
    }
</style>

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