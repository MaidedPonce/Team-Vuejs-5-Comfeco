<template>
	<div>
		<Carousel />
		<button @click="logout()" to="/login" class="bg-red-400 block max-w-min text-sm px-4 py-2 leading-none border rounded text-white border-red-800 mt-4 md:mt-0 md:inline-block md:mx-1 lg:mt-0">Logout</button>
	</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Carousel from '../../components/Carousel'
export default {
    name: 'Private',
	components: {
		Carousel
	},
    methods: {
		logout() {
			firebase.auth()
				.signOut()
				.then(() => {
					this.$router.replace('/')
				}
			)
		}
    }
}
</script>
