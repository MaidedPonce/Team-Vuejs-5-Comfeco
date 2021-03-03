<template>
	<div>
		<button @click="logout()" to="/login" class="bg-red-400 block max-w-min text-sm px-4 py-2 leading-none border rounded text-white border-red-800 mt-4 md:mt-0 md:inline-block md:mx-1 lg:mt-0">Logout</button>
		<router-link to="/edit" class="bg-purple-400 block max-w-min text-sm px-4 py-2 leading-none border rounded text-white border-purple-800 mt-4 md:mt-0 md:inline-block md:mx-1 lg:mt-0">Editar perfil</router-link>
		<Section />
		<Carousel />
		<CarouselMini />
		<Counter 
			:year="2021"
			:month="2"
			:date="27"
			:hour="23"
			:minute="59"
			:second="59"
			:millisecond="31"
	/>
	</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Carousel from '../../components/Carousel'
import CarouselMini from '../../components/CarouselMini'
import Counter from '../../components/Counter'
import Section from '../../components/Section'
export default {
    name: 'Private',
	components: {
		Carousel,
		CarouselMini,
		Counter,
		Section
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
