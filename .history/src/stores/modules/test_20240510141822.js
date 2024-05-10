import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestStore = defineStore('test', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
})
