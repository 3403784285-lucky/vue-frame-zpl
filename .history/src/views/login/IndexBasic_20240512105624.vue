<template>
  <base-wrapper class="flex-center-center bg-color-primary">
    <div
      class="flex-c-center-center bg-color-white"
      style="width: 500px; height: 400px; border-radius: 10px"
    >
      <h3>Login</h3>
      <el-form :model="loginForm" class="m-t-20" label-width="auto" style="width: 300px">
        <el-form-item>
          <el-input v-model="loginForm.username" :prefix-icon="Star" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="loginForm.password"
            :prefix-icon="Lock"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
      </el-form>
      <el-button type="primary" class="m-t-20" style="width: 300px" @click="handleClick"
        >登录</el-button
      >
    </div>
  </base-wrapper>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
import { Star, Lock } from '@element-plus/icons-vue'
const { proxy } = getCurrentInstance()
const { login } = proxy.$stores.user.useUserStore()

let loginForm = ref({})
function handleClick() {
  login.then((loginForm) => {
    console.log('登录成功')
  })
}
</script>
<style lang="scss" scoped></style>
