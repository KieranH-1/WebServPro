<script setup lang="ts">
import { refNotifications } from '@/models/notifications'
import { ref } from 'vue'

const notifications = refNotifications()

function removeNotification(index: number) {
  notifications.value.splice(index, 1)
}
</script>

<template>
  <div>
    <div
      v-for="(message, index) in notifications"
      :key="index"
      class="notification is-light"
      :class="`is-${message.type}`"
    >
      <button class="delete" @click="removeNotification(index)"></button>
      {{ message.text }}
    </div>
  </div>
</template>

<style scoped></style>
