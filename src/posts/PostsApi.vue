<template>
	<div class="max-w-7xl mx-auto px-4 mt-8">
		<h3 class="text-3xl font-extrabold text-gray-800 text-center">Welcome to my Posts Api</h3>
		<div v-if="loading" class="flex justify-center items-center h-64">
			<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
		</div>
		<div v-else>
			<div class="flex space-x-8 pt-2">
				<div>
					<div v-for="p in posts.slice(inicio, fin)" :key="p.id"
						className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 p-6 mb-4">
						<h2 className="text-xl font-semibold mb-3 text-gray-800">Titulo: {{ p.title }}</h2>
						<p className="text-gray-600 line-clamp-4">Descripcion: {{ p.body }}</p>
					</div>
				</div>
			</div>
			<div class="mt-8 flex justify-center space-x-4 mb-10">
				<button
					class="bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
					:class="{ 'opacity-50 cursor-not-allowed': inicio <= 0 }" @click="backPosts" :disabled="inicio <= 0">
					Anterior
				</button>
				<button
					class="bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
					:class="{ 'opacity-50 cursor-not-allowed': fin >= 99 }" @click="nextPosts" :disabled="fin >= 99">
					Siguiente
				</button>
			</div>
		</div>
	</div>

</template>
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const posts = ref([])
const loading = ref(true);

const getPosts = async () => {
	try {
		const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
		posts.value = resp.data;

	} catch (error) {
		console.error(error);
	} finally {
		loading.value = false;
	}
};

const valor = 5;
const inicio = ref(0);
const fin = ref(5);

const nextPosts = () => {
	inicio.value += valor;
	fin.value += valor;
};

const backPosts = () => {
	inicio.value -= valor;
	fin.value -= valor;
};

getPosts();

</script>