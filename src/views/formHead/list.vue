<template>
    <div>
        <el-table :data="tableData">
            <el-table-column prop="id" label="单头编号" width="140">
            </el-table-column>
            <el-table-column prop="flag" label="单头类型" width="120">
            </el-table-column>
            <el-table-column prop="createDate" label="创建时间" width="120">
            </el-table-column>
        </el-table>
    </div>    
</template>

<script>
export default {
    name:'list',
    data(){
        return{
            tableData:[]
        }
    },
   
    mounted() {
    var temp = this.tableData;
    this.axios({
      methos: "get",
      url: "http://localhost:80/formHead/pageQuery"
    })
      .then(response => {
        this.tableData = response.data.data.content;
      })
      .catch(err => {
        console.log(err);
      });
  }
    
}
</script>

<style scoped>

</style>