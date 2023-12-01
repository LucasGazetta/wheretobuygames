import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/components/HomePage.vue';
import AboutUs from '../src/components/AboutUs.vue';
import SearchResults from '../src/components/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: SearchResults
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
