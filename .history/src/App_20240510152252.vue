<template>
  <button @click="handleClick">click</button>
  <h1>{{ res }}</h1>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
let res = $ref(null)

async function handleClick() {
  res = await proxy.$api.demo.time()
}
</script>
