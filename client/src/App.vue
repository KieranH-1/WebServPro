<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container">
    <RouterView />
  </div>

  <RouterView />
</template>

<style scoped>
  body {
    background-color: #f5f5f5;
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
  }
</style>