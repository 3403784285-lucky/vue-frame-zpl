<template>
  <base-wrapper class="flex-center-center bg-color-primary">
    <div class="flex-c-center-center bg-color-white" style="width: 500px; height: 400px">
      <h3>Login</h3>
      <el-form :model="loginForm" class="m-t-20" label-width="auto" style="max-width: 600px">
        <el-input v-model="loginForm.username" :prefix-icon="Star" />

        <el-input v-model="loginForm.password" :prefix-icon="Search" />
      </el-form>
    </div>
  </base-wrapper>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
import { Star } from '@element-plus/icons-vue'
const { proxy } = getCurrentInstance()
let loginForm = ref({})
</script>
<style lang="scss" scoped></style>
