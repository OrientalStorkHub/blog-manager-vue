<template>
  <div class="base-div">
    <h2>用户注册</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="名称：" prop="nickname">
        <el-input v-model="ruleForm.nickname" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <div class="button-container">
        <el-button size="small" @click="back()">返回</el-button>
        <el-button type="primary" size="small" @click="submitForm('ruleForm')">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  data() {
    return {
      ruleForm: {

      },
      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' },
        { pattern: /^[^@]+$/, message: '用户名不能包含 @ 符号', trigger: 'blur' }],
        nickname: [{ required: true, message: '名称不能为空', trigger: 'blur' },],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
      }
    }


  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$post('/api/auth/register', {
            username: that.ruleForm.username,
            nickname: that.ruleForm.nickname,
            email: that.ruleForm.email,
            password: that.ruleForm.password
          }).then(res => {
            if (res.code == '200') {

            } else {
              Message.error(res.message);
              if (res.code == '4009') {
                this.ruleForm.username = '';
              }
            }

          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    back() {
      this.goBack('login')
    }

  },
  mounted() {

  },
}
</script>
<style lang="scss" scoped>
.base-div {
  display: flex;
  flex-direction: column;
  /* 使用 column 方式排列子元素 */
  align-items: center;
  /* 垂直居中子元素 */
  // padding-top: 20px;
  background-color: #f0f2f5;
  /* 移除 justify-content: center; 因为我们现在是 column 方式 */

  h2 {
    margin-top: 50px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>