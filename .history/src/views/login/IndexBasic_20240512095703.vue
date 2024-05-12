<template>
  <base-wrapper class="flex-center-center bg-color-primary">
    <div class="flex-center-center bg-color-white" style="width: 500px; height: 400px">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
    </div>
  </base-wrapper>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
</script>
<style lang="scss" scoped></style>
