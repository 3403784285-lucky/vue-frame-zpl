<template>
  <base-wrapper class="flex-center-center bg-color-primary"></base-wrapper>
  <div class="bg-color-white" style="width: 500px; height: 400px"></div>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
</script>
<style lang="scss" scoped></style>
