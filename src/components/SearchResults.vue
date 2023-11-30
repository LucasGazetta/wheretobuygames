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
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in searchResults" :key="result.id">
            <td>{{ result.store }}</td>
            <td>{{ result.price }}</td>
            <td><a :href="result.link" target="_blank">Visit Store</a></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "SearchResultsPage",
  props: {
    searchResults: Array
  }
};
</script>

<style scoped>
.search-results-page {
  background-color: #080612;
  color: #fff;
  min-height: 100vh;
  padding: 2rem;
}

.page-title {
  color: #fe5441;
  margin-bottom: 2rem;
}

.table-section {
  max-width: 800px;
  margin: auto;
  overflow-x: auto;
}

.results-table {
  width: 100%;
  border-collapse: collapse;
}

.results-table th, .results-table td {
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #333;
}

.results-table th {
  background-color: #222;
  color: #fff;
}

.results-table td a {
  color: #fe5441;
  text-decoration: none;
}

.results-table td a:hover {
  color: #fa3621;
}
</style>
