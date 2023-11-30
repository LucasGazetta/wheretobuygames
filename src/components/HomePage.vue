<template>
  <div class="home-page container-fluid">
    <header class="text-center mb-4">
      <img src="@/assets/WTBG_LOCO2.png" alt="WhereToBuyGames Logo" class="img-fluid">
      <p class="tagline">Find the best deals on your favorite games from top online stores</p>
    </header>

    <div class="search-section d-flex justify-content-center">
      <form class="form-inline" @submit.prevent="searchGames">
        <input type="text" v-model="searchQuery" class="form-control mr-sm-2" placeholder="Search for games...">
        <button type="submit" class="btn btn-primary ">Search</button>
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
