<template>
  <div class="about-page">
    <router-link to="/" class="back-to-home">&#8592;</router-link>
    <header class="site-header text-center">
      <h1 class="page-title">About Us</h1>
    </header>
    <section class="content-section text-center">
      <p class="about-description">
        This site was created as part of a college project with the goal of helping you find the best deals in various online PC game stores. We are dedicated to making it easier to search for the best promotions, saving you time and money.
      </p>
      <p class="contact-info">
        Have any questions or suggestions? Contact us at: <a href="mailto:lucasagazetta@gmail.com">lucasagazetta@gmail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<style scoped>
@import "../assets/css/aboutus.css"

</style>
