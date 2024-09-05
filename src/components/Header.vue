<template>
  <div class="base-div">
    <div style="flex: 1;text-align: left;">欢迎登录: {{ username }} </div>
    <div style="flex: 1;text-align: right;">
      <el-badge :is-dot="dot" class="item">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <!-- 消息中心<i class="el-icon-caret-bottom el-icon--right"></i> -->
            消息中心 <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-badge>

    </div>
    <div style="margin-left: 10px;">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      username: '',
      dot: false, // 消息中心小红点数据
    };
  },
  methods: {

  },
  mounted() {
    debugger
    this.username = localStorage.getItem('nickName');
  },
}
</script>
<style lang="scss" scoped>
.base-div {
  display: flex;
  align-items: center;
}
</style>