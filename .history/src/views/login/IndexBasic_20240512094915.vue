<template>
  <base-wrapper class="bg-color-primary"></base-wrapper>
  <div class="flex-center-center bg-color-white" style="width: 500px; height: 300px"></div>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
</script>
<style lang="scss" scoped></style>
