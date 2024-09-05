<template>
  <div class="base-div">
    <div class="search-div">
      <el-input size="small" placeholder="请输入分类名称" v-model="search_text" clearable></el-input>
      <el-button size="small" type="primary">搜索</el-button>
      <el-button size="small" class="add-btn" type="primary" @click="add()">新增</el-button>
    </div>
    <div class="list-div">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="name" align="center" label="分类名称">
        </el-table-column>
        <el-table-column fixed prop="createdAt" align="center" label="创建时间">
        </el-table-column>
        <el-table-column label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page_div">
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="page.current" :page-size="page.size"
        layout="total, prev, pager, next" :total="total">
      </el-pagination>
    </div>



    <el-dialog title="分类" :visible.sync="categoryVisible">
      <el-form :model="categoryForm" :rules="rules" ref="categoryForm">
        <el-form-item label="分类名称" prop="name" :label-width="fromLabelWidth">
          <el-input style="width:80%" v-model="categoryForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="categoryVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      search_text: '',
      tableData: [],
      categoryVisible: false,
      categoryForm: {},
      fromLabelWidth: '100px',
      rules: {
        categoryName: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
      page: {
        current: 1,
        size: 10
      },
      total: '',
    };
  },
  methods: {
    handleCurrentChange() {

    },
    handleClick(row) {
      console.log(row);
    },
    add() {
      this.categoryForm = {};
      this.categoryVisible = true;
    },
    addSubmit() {
      let that = this;
      that.$refs.categoryForm.validate((valid) => {
        if (valid) {
          this.$post('/api/content/category/insert', {
            name: that.categoryForm.name
          }).then(res => {
            if (res.code == '200') {
              this.categoryVisible = false;
              Message.success(res.message);
            } else {
              Message.error(res.message);
            }
          })
        }
      });
    },
    listPage() {
      let that = this;
      this.$post('/api/content/category/listPage', {
        keyword: that.search_text,
        currentPage: that.page.current,
        pageSize: that.page.size
      }).then(res => {
        if (res.code == '200') {
          that.tableData = res.data.data
          that.total = res.data.totalRecords
          that.page.current = res.data.currentPage
          that.page.size = res.data.pageSize
        } else {
          Message.error(res.message);
        }
      })
    }
  },
  mounted() {
    this.listPage()
  },
}
</script>
<style lang="scss" scoped>
.base-div {
  display: flex;
  align-items: center;
}
</style>