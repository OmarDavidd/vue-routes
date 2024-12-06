<template>
	<div class="max-w-7xl mx-auto px-4 mt-8">
		<div v-if="loading" class="flex justify-center items-center h-64">
			<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
		</div>
		<div v-else class="grid grid-cols-1">
			<div class="flex space-x-8 pt-8">
				<img :src="`${games.thumbnail}`" :alt="games.title" class="w-80 h-auto object-cover rounded-lg shadow-lg" />

				<div class="flex-1">
					<h3 class="text-3xl font-semibold text-gray-900 mb-4">{{ games.title }}</h3>
					<p class="text-lg text-gray-700 leading-relaxed mb-4">{{ games.short_description }}</p>
					<p class="text-lg text-gray-700 leading-relaxed">
						<span class="font-semibold">Fecha de salida:</span> {{ games.release_date }}
					</p>
					<p class="text-lg text-gray-700 leading-relaxed">
						<span class="font-semibold">Developer:</span> {{ games.developer }}
					</p>
				</div>
			</div>
		</div>

		<RouterLink class="mt-8 inline-block bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-950 " to="/games">
			Back
		</RouterLink>
	</div>
</template>


<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '297951f127mshebec33bbb9ee3b5p118f30jsn964c19c2c88d'
	}
};

const games = ref([])
const loading = ref(true);

const getGamesById = async (gameId) => {
	try {
		const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
		games.value = response.data
	} catch (error) {
		console.error('Error al obtener los juegos:', error);
	} finally {
		loading.value = false;
	}
};
getGamesById(route.params.id)


</script>
