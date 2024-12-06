<template>
	<div class="min-h-screen py-8 px-4">
		<div class="max-w-7xl mx-auto">
			<h3 class="text-3xl font-extrabold text-gray-800 mb-10 text-center">List of Shoters</h3>
			<div v-if="loading" class="flex justify-center items-center h-64">
				<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
			</div>
			<div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
				<div v-for="g in games" :key="g.id"
					class="bg-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
					<RouterLink :to="`/games/${g.id}`">
						<img :src="`${g.thumbnail}`" :alt="g.title" class="w-full h-auto object-cover p-4" />
					</RouterLink>
					<RouterLink :to="`/games/${g.id}`">
						<p class="text-center font-bold text-gray-800">
							{{ g.title }}
						</p>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '297951f127mshebec33bbb9ee3b5p118f30jsn964c19c2c88d'
	}
};

const games = ref([])
const loading = ref(true);

const getGames = async () => {
	try {
		const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options);
		games.value = response.data
		console.log(response.data);
	} catch (error) {
		console.error('Error al obtener los juegos:', error);
	} finally {
		loading.value = false;
	}
};

getGames();

</script>