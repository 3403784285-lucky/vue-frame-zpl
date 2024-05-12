<template>
  <div>首页</div>
  <el-button v-has-perm="'sys:user:add'" type="primary">添加</el-button>
  <el-button v-has-perm="['sys:user:add', 'sys:user:edit']" type="primary">编辑</el-button>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
</script>
<style lang="scss" scoped></style>
