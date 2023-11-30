<template>
  <div id="app">
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from '../src/components/Footer.vue';

export default {
  name: 'App',
  components: {
    TheFooter
  }
}
</script>
