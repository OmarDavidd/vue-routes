<template>
	<div class="max-w-7xl mx-auto px-4 mt-8">
		<div v-if="loading" class="flex justify-center items-center h-64">
			<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
		</div>
		<div v-else class="grid grid-cols-1">
			<div class="flex space-x-8 pt-8">
				<img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"
					class="w-80 h-auto object-cover rounded-lg shadow-lg" />

				<div class="flex-1">
					<h3 class="text-3xl font-semibold text-gray-900 mb-4">{{ movie.title }}</h3>
					<p class="text-lg text-gray-700 leading-relaxed mb-4">{{ movie.overview }}</p>
					<p class="text-lg text-gray-700 leading-relaxed mb-4">
						<span class="font-semibold">Actores principales:</span> {{ movie.actors }}
					</p>

					<p class="text-lg text-gray-700 leading-relaxed">
						<span class="font-semibold">Fecha de estreno:</span> {{ movie.release_date }}
					</p>
					<p class="text-xl text-gray-700 leading-relaxed">
						<span class="font-semibold">Calificacion:</span> {{ movie.vote_average }}
					</p>

				</div>
			</div>
		</div>

		<RouterLink class="mt-8 inline-block bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-950 " to="/movie">
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
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjZmZjY0NTcyYTEwZTFkOWI2N2M4MjUzY2Y4YjRhNSIsIm5iZiI6MTczMDQ5MDA1OS4wMzcsInN1YiI6IjY3MjUyZWNiY2I1NDhiNzE2YTgyNTZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fOcjOlcoL3lnedo-7kK8THxwTqmYpPz45ZIcMQ7uMlU'
	}
};

const movie = ref([])
const loading = ref(true);

const getMovieById = async (movieId) => {
	try {
		const resp = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=es-MX`, options);
		movie.value = {
			id: resp.data.id,
			title: resp.data.title,
			overview: resp.data.overview,
			poster_path: resp.data.poster_path,
			release_date: resp.data.release_date,
			vote_average: resp.data.vote_average,
			actors: await getActors(movieId)
		};
	} catch (error) {
		console.error(error);
	} finally {
		loading.value = false;
	}
};
const getActors = async (id) => {
	try {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`, options);
		const data = await response.json();

		return data.cast.slice(0, 5).map(actor => actor.name).join(', ');
	} catch (err) {
		console.log(err);
		return 'No disponible';
	}
};
getMovieById(route.params.id)


</script>
