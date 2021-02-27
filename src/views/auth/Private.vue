<template>
	<div class="flex-grow py-12">
		<Carousel />
		<CarouselMini />
	</div>
</template>

<script>
import Carousel from '../../components/Carousel'
import CarouselMini from '../../components/CarouselMini'

export default {
	name: 'Private',
	components: {
		Carousel,
		CarouselMini,
	},
	methods: {
		
	}
}
</script>
