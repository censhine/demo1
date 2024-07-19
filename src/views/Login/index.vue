<template>
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import { useUserStore } from '@/store/modules/user'
  import { LoginService } from '@/util/index'
  import router from '../../router';
  
  const ruleFormRef = ref<FormInstance>()
  
  const ruleForm = reactive({
    userName: '1',
    password: '2',
  })
  
  const rules = reactive<FormRules<typeof ruleForm>>({
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message:'请输入密码', trigger: 'blur' }],
  })
  
  const submitForm =  (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
      if (valid) {
        const userStore = useUserStore();
        // 假设 loginService 是一个处理登录请求的服务
        const { code, data } = await LoginService({ ...ruleForm });
        console.log(code, data)
        if (code == 200) {
            const menuKeys = data?.menuList?.map(item =>item.menuKeys); // 从响应中获取菜单 keys
            const keys = Object.values(menuKeys)
            console.log(keys)
            userStore.setMenuKeys(keys);
            alert(1)
            // 跳转到主页或其他逻辑
            router.push({name: 'home'})
        }       
      } else {
        console.log('error submit!')
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>