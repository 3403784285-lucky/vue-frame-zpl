<template>
  <h1>{{ $filters.setName(1) }}</h1>
  <button @click="handleClick">click</button>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()

async function handleClick() {
  proxy.submitOk('保存成功')
  proxy.submitFail('操作失败')
}
</script>
