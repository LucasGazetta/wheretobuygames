<template>
  <div class="home-page container-fluid">
      <nav class="navbar navbar-expand-lg">
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
      <img src="@/assets/WTBG_LOCO2.png" alt="WhereToBuyGames Logo" class="img-fluid">
      <p class="tagline">Find the best deals on your favorite games from top online stores</p>
    </header>

    <div class="search-section d-flex justify-content-center">
      <form class="w-100" @submit.prevent="searchGames">
        <div class="input-group"> 
          <input type="text" v-model="searchQuery" class="form-control" placeholder="Name your game...">
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        searchGames() {
            console.log("Searching for:", this.searchQuery);
        }
    }
};
</script>

<style scoped>
@import "../assets/css/homepage.css";
</style>
