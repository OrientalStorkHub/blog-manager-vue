<template>
  <div class="base-div">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Main from '@/components/Main.vue'
export default {
  components: {
    // 注册组件
    Header,
    Aside,
    Main
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  },
}
</script>
<style lang="scss" scoped>
.el-card__body,
.el-main {
  padding: 0px;
}
</style>