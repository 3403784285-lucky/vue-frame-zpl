<template>
  <h1>{{ count }}</h1>
  <button @click="handleClick">click</button>
  <br />
  <h1>{{ $stores.test.useTestStore().count }}</h1>
  <button @click="$stores.test.useTestStore().add">click</button>
</template>

<script setup>
const { proxy } = getCurrentInstance()
let useTestStore = proxy.$stores.test.useTestStore()
let { count } = toRefs(useTestStore) // 响应式
let { add } = useTestStore

function handleClick() {
  add()
}
</script>

<style lang="scss" scoped></style>
