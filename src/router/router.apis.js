import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../HomePage.vue';


const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import('../movies/MoviesApi.vue')
        },
        {
            path: '/movie/:id',
            name: 'movie-details',
            component: () => import('../movies/components/MovieDetails.vue')
        },
        {
            path: '/phone',
            name: 'phone',
            component: () => import('../phone/PhoneApi.vue')
        },
        {
            path: '/post',
            name: 'post',
            component: () => import('../posts/PostsApi.vue')
        },
        {
            path: '/tv',
            name: 'tv',
            component: () => import('../tv/TvApi.vue')
        },
    ]
})

export default routes;