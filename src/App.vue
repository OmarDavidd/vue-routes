<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
	<nav class="bg-gray-800 p-4">
		<ul class="flex space-x-4">
			<RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink>
			<RouterLink to="/games" class="text-white hover:text-gray-300">Game</RouterLink>
			<RouterLink to="/movie" class="text-white hover:text-gray-300">Movie</RouterLink>
			<RouterLink to="/post" class="text-white hover:text-gray-300">Post</RouterLink>
			<RouterLink to="/tv" class="text-white hover:text-gray-300">Tv</RouterLink>
		</ul>
	</nav>

	<div class="container">
		<RouterView />
	</div>
</template>
<style></style>