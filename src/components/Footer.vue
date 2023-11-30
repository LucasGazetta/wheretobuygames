<template>
  <footer class="footer">
    <div class="container text-center">
      <span>&copy; {{ currentYear }} Lucas A. Gazetta.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #080612;
  color: #ffffff6d;
  padding: 1rem 0;
  position: static;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* Media query para dispositivos móveis */
@media (max-width: 768px) {
  .footer {
    position: static; /* ou 'fixed' se você quer que o rodapé fique sempre visível */
    padding: 0.5rem 0;
  }
}
</style>
