<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="名称" width="140"></el-table-column>
      <el-table-column prop="sku" label="规格" width="120"></el-table-column>
      <el-table-column prop="count" label="库存" width="120"></el-table-column>
      <el-table-column prop="updateDate" label="最后修改时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    var temp = this.tableData;
    this.axios({
      methos: "get",
      url: "http://localhost:80/productInfo/pageQuery"
    })
      .then(response => {
        this.tableData = response.data.data.content;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
</style>