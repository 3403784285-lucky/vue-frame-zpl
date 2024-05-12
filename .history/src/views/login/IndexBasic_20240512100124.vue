<template>
  <base-wrapper class="flex-center-center bg-color-primary">
    <div class="flex-start-center bg-color-white" style="width: 500px; height: 400px">
      <el-form :model="loginForm" class="m-l-20" label-width="auto" style="max-width: 600px">
        <el-form-item label="Activity name">
          <el-input v-model="loginForm.username" />
        </el-form-item>
      </el-form>
    </div>
  </base-wrapper>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
let loginForm = ref({})
</script>
<style lang="scss" scoped></style>
