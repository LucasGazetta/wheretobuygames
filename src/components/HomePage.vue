<template>
  <div class="home-page container-fluid">
      <nav class="navbar navbar-expand-lg logo-fade-in">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://x.com/">
                  <i class="bi bi-twitter"></i> X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <header class="text-center mb-4">
      <img src="@/assets/WTBG_LOCO2.png" alt="WhereToBuyGames Logo" class="img-fluid logo-fade-in">
      <p class="tagline logo-fade-in">Find the best deals on your favorite games from top online stores. Just search the game below</p>
    </header>

    <div class="search-section d-flex justify-content-center search-fade-in">
      <form class="w-100" @submit.prevent="searchGames">
        <div class="input-group"> 
          <input type="text" v-model="searchQuery" class="form-control" placeholder="Name your game..">
            <button type="submit" class="btn btn-primary" :disabled="isLoading">
              <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span v-if="!isLoading">Search</span>
            </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomePage",
  data() {
      return {
          searchQuery: '',
          isLoading: false
      };
  },
  methods: {
      async searchGames() {
          this.isLoading = true;
          try {
              let response = await axios.get(`http://localhost:8000/wtbg_api_module/search/${this.searchQuery}`);
              let resultsArray = Object.entries(response.data).map(([store, data]) => {
                  if (typeof data === 'string') {
                      return { store, title: 'Não disponível', price: data, url: '' };
                  }
                  return { store, ...data };
              });

              localStorage.setItem('searchResults', JSON.stringify(resultsArray));
              this.$router.push({ name: 'SearchResults' });
          } catch (error) {
              console.error("Erro na busca:", error);
          } finally {
              this.isLoading = false;
          }
      }
  }
};
</script>

<style scoped>
@import "../assets/css/homepage.css";
</style>
