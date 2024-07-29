<template>
  <div class="menu">
    <el-menu default-active="1" class="my-menu" @open="handleOpen" @close="handleClose" :router="true"
      :unique-opened="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="item in menus">
        <template v-if="item.list != null && item.list.length != 0">
          <el-submenu :key="item.id" :index="item.url">
            <template slot="title">
              <i :class="item.icon"></i>
              <span style="text-align: left;">{{ item.name }}</span>
            </template>
            <template v-for="(childItem, i) in item.list">
              <el-menu-item route :index="childItem.url" :key="childItem.id">
                {{ childItem.name }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item route :key="item.id" :index="item.url">
            <i :class="item.icon"></i>
            <span style="text-align: left;">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      menus: [
        { id: 1, name: '首页', url: '/index', icon: 'el-icon-menu' },
        {
          id: 2,
          name: '用户管理',
          icon: 'el-icon-user',
          url: '/user',
          list: [
            { id: 21, name: '用户列表', url: '/user/list' },
          ]
        }
      ],
    }
  },

  mounted() {
    // this.getMenuList()
  },

  methods: {

  }
}
</script>
<style lang='scss' scoped>
.menu {
  width: 100%;
  height: 100%;
}

.my-menu {
  height: 100%;
}
</style>