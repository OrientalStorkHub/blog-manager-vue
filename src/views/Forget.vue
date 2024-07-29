<template>
  <div class="base-div">
    <h2>重置密码</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="邮箱：" prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入注册邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入新密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPwd">
        <el-input type="password" v-model="ruleForm.checkPwd" placeholder="请确认密码" show-password></el-input>
      </el-form-item>
      <div class="button-container">
        <el-button size="small" @click="goBack()">返回</el-button>
        <el-button type="primary" size="small" @click="submitForm('ruleForm')">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {

      },
      rules: {
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        checkPwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: this.checkPassword, trigger: 'blur' }
        ]
      }
    }


  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    goBack() {
      this.$router.push({ name: 'login' })
    },

    checkPassword(rule, value, callback) {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
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