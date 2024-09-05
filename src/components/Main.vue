<template>
  <div class="base-div">
    <!-- <div class="tags-div">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <div class="main-div"> <router-view></router-view> </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
  },
  mounted() {

  },
}
</script>
<style lang="scss" scoped>
.base-div {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;

  .tags-div {
    height: 100%;
    max-height: 20px;
    background-color: #f0f2f5;
    padding-left: 10px;
  }

  .main-div {
    flex-grow: 1;
  }
}
</style>