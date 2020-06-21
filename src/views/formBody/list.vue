<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="headId" label="单头编号" width="140"></el-table-column>
      <el-table-column prop="id" label="单身编号" width="120"></el-table-column>
      <el-table-column prop="type" label="类型" width="120"></el-table-column>
      <el-table-column prop="productId" label="商品ID" width="120"></el-table-column>
      <el-table-column prop="count" label="商品数量" width="120"></el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="240"></el-table-column>
      <el-table-column prop="updateDate" label="修改时间" width="240"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      tableData: [],
      headId: 35
    }
  },
  mounted() {
    var temp = this.tableData;
    this.axios({
      methos: "get",
      url: "http://localhost:80/formBody/pageQuery?headId="+this.headId
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