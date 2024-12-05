<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const api_key = 'a60c8092d60c3a84b51bcf5ac7f13ae9'
const base_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`

const nowplaying = ref([])
const getNowPlayingMovies = async () => {
    const resp = await fetch(base_url);
    const data = await resp.json()
    nowplaying.value = data.results.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path
        }
    })
}

getNowPlayingMovies()

</script>

<template>
    <h3 class="display-6 text-warning">List of now Playing Movies</h3>
    <template v-for="m in nowplaying" :key="m.id">
        <RouterLink :to="`/movie/${m.id}`"> {{ m.title }} </RouterLink> <br>
    </template>
</template>
