<template>
  <div class="base-div">
    <div class="search-div">
      <el-input size="small" placeholder="请输入用户名称" v-model="search_text" clearable></el-input>
      <el-button size="small" type="primary">搜索</el-button>
    </div>
    <div class="list-div">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>

        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_text: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  mounted() {

  },
}
</script>
<style lang="scss" scoped>
.base-div {
  display: flex;
  align-items: center;
}
</style>