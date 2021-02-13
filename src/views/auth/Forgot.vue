<template>
    <div class="flex-grow bg-purple-500">
        <div class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold">Forgot Password</h2>
                <p class="text-3md mt-2">For recover your password</p>
            </div>
            <form action="">
                <div class="my-3">
                    <label for="" class="block text-gray-600 my-1">Email Address</label>
                    <input type="text" class="w-full text-gray-700 border border-red-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md" placeholder="homero@mail.com" />
                    <div>
                        <span class="text-xs text-red-400">This field is required</span>
                    </div>
                </div>
                <button class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3">Send Me Email</button>
            </form>
            <p class="text-gray-600 my-8 text-center">Don't have an account? <router-link to="/register" class="text-purple-500 font-semibold">Register</router-link></p>
        </div>
    </div>
</template>