<template>
	<div class="min-h-screen py-8 px-4">
		<div class="max-w-7xl mx-auto">
			<h3 class="text-3xl font-extrabold text-gray-800 mb-10 text-center">List of trending TV shows</h3>
			<div v-if="loading" class="flex justify-center items-center h-64">
				<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
			</div>
			<div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
				<div v-for="m in tvShows" :key="m.id"
					class="bg-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
					<RouterLink :to="`/tv/${m.id}`">
						<img :src="`https://image.tmdb.org/t/p/w500${m.poster_path}`" :alt="m.name"
							class="w-full h-auto object-cover p-4" />
					</RouterLink>
					<RouterLink :to="`/tv/${m.id}`">
						<p class="text-center font-bold text-gray-800">
							{{ m.name }}
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
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjZmZjY0NTcyYTEwZTFkOWI2N2M4MjUzY2Y4YjRhNSIsIm5iZiI6MTczMDQ5MDA1OS4wMzcsInN1YiI6IjY3MjUyZWNiY2I1NDhiNzE2YTgyNTZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fOcjOlcoL3lnedo-7kK8THxwTqmYpPz45ZIcMQ7uMlU'
	}
};

const tvShows = ref([])
const loading = ref(true);

const getTvShows = async () => {
	try {
		const resp = await axios.get('https://api.themoviedb.org/3/trending/tv/week?language=es-Mx', options);
		tvShows.value = resp.data.results.map((movie) => ({
			id: movie.id,
			name: movie.name,
			overview: movie.overview,
			poster_path: movie.poster_path,
		}));
	} catch (error) {
		console.error(error);
	} finally {
		loading.value = false;
	}
};

getTvShows()

</script>
