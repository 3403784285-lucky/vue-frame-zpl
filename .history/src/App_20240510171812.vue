<template>
  <button @click="handleClick">click</button>
  <h1>{{ res }}</h1>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
let res = ref(null)

async function handleClick() {
  res.value = await proxy.$api.demo.time()
  console.log(res.value + 'ok')
}
</script>
