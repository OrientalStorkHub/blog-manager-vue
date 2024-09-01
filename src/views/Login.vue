<template>
  <div class="base-div">
    <el-card class="login-card">
      <h2>登录</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="usernameOrEmail">
          <el-input v-model="ruleForm.usernameOrEmail" placeholder="请输入用户名或邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" id="submit">登录</el-button>
      </el-form>
      <p><a href="/forget">忘记密码?</a> | <a href="/regist">现在注册!</a></p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {

      },
      rules: {
        usernameOrEmail: [
          { required: true, message: '用户名或邮箱不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }


  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          this.$post('/auth/login', this.ruleForm, (res) => {
            console.log(res);
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  },
  mounted() {

  },
}
</script>
<style lang="scss" scoped>
.base-div {
  display: flex;
  /* 水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  background-color: #f0f2f5;

  .login-card {
    // width: 22.2%;
    width: 320px;
    // height: 56.5%;
    height: 410px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;

    .el-form-item {
      margin-bottom: 10px;
    }

    #submit {
      width: 100%;
      margin-top: 20px;
    }

    p a {
      color: #1890ff;
      text-decoration: none;
    }
  }
}
</style>