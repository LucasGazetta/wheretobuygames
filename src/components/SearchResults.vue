<template>
  <div class="search-results-page">
    <header class="text-center">
      <h1 class="page-title">Search Results</h1>
    </header>

    <section class="table-section">
      <table class="results-table">
        <thead>
          <tr>
            <th>Store</th>
            <th>Game</th>
            <th>Price</th>
          </tr>
        </thead>
            <tbody>
                <tr v-for="(result, index) in searchResults" :key="index">
                    <td>
                    <template v-if="result.price !== 'Not Found'">
                        <a :href="result.url" target="_blank">{{ result.store }}</a>
                    </template>
                    <template v-else>
                        {{ result.store }}
                    </template>
                    </td>
                    <td>{{ result.title }}</td>
                    <td>{{ result.price }}</td>
                </tr>
            </tbody>
      </table>
    </section>
    <p class="search-tip text-center">
      The title doesn't match your search? Try searching again writing the full name of the game.
    </p>

    <div class="search-again-button">
        <router-link to="/" class="btn-search-again">Search Again</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResultsPage",
  data() {
    return {
      searchResults: []
    };
  },
  mounted() {
    let results = localStorage.getItem('searchResults');
    if (results) {
      this.searchResults = JSON.parse(results);
      this.sortResultsByPrice();
      console.log("Dados ordenados:", this.searchResults);
    }
  },
  methods: {
    sortResultsByPrice() {
      this.searchResults = this.searchResults
        .map(result => ({ ...result, numericPrice: this.extractNumber(result.price) }))
        .filter(result => !isNaN(result.numericPrice))
        .sort((a, b) => a.numericPrice - b.numericPrice);
    },
    extractNumber(priceString) {
      if (typeof priceString === 'string') {
        let cleanString = priceString.replace('R$', '').replace('$', '').replace(',', '.');
        let number = parseFloat(cleanString);
        return isNaN(number) ? Number.MAX_VALUE : number;
      }
      return Number.MAX_VALUE;
    }
  }
};

</script>

<style scoped>
@import "../assets/css/searchresults.css";
</style>
