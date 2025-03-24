<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isShoppingCartOpen?: boolean
}>()
</script>

<template>
  <div class="sliding-drawer" :class="{ open: props.isOpen }">
    <slot></slot>
  </div>
</template>

<style scoped>
.sliding-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.sliding-drawer.open,
.sliding-drawer:hover {
  transform: translateX(0);
}
</style>
