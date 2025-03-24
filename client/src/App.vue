<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NotificationList from './components/NotificationList.vue'
import SlidingDrawer from './components/SlidingDrawer.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import { ref } from 'vue'

const isShoppingCartOpen = ref(false)
</script>

<template>
  <header>
    <NavBar v-model="isShoppingCartOpen" />
  </header>

  <div class="container body-content">
    <NotificationList />
    <RouterView />
  </div>

  <SlidingDrawer :isOpen="isShoppingCartOpen">
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
