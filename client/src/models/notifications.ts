import { ref } from 'vue'

export interface Notification {
  message: string
  type: 'info' | 'success' | 'error' | 'warning'
}

const notifications = ref([] as Notification[])

export const refNotifications = (): Notification[] => {
  return [
    { message: 'This is a primary notification #1', type: 'success' },
    { message: 'This is a primary notification #2', type: 'warning' },
    { message: 'This is a primary notification #3', type: 'error' },
    { message: 'This is a primary notification #4', type: 'info' },
  ]
}

export function addNotification(notification: Notification) {
  notifications.value.push(notification)
}

export function removeNotification(index: number) {
  notifications.value.splice(index, 1)
}
