<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
	<ul class="menu">
		<RouterLink to="/" class="link">Home</RouterLink>
		<RouterLink to="/phone" class="link">Phone</RouterLink>
		<RouterLink to="/movie" class="link">Movie</RouterLink>
		<RouterLink to="/post" class="link">Post</RouterLink>
		<RouterLink to="/tv" class="link">Tv</RouterLink>
	</ul>
	<div class="container">
		<RouterView />
	</div>
</template>
<style>
.menu {
	width: 300px;
	display: flex;
}

.link {
	margin-right: 10px;
}

.link:hover {
	color: white;
	background-color: #154c79;
	cursor: pointer;
}
</style>