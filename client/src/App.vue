<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NotificationList from './components/NotificationList.vue'
import SlidingDrawer from './components/SlidingDrawer.vue'
import ShoppingCart from './components/ShoppingCart.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container body-content">
    <NotificationList />
    <RouterView />
  </div>

  <SlidingDrawer>
    <ShoppingCart />
  </SlidingDrawer>
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
