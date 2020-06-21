<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>商品</template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="productInfo">详细信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>单头</template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="head">详细信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-message"></i>单身</template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="body">详细信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
                </el-header>
                
                <el-main>
                    <router-view></router-view>
                </el-main>
                
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name:'Index',
    data(){
        return{
            tableData:[]
        }

    },
    methods:{
        head(){
            console.log("head")
            this.$router.push({ path:'/formHead'}).catch(data=>{})
        },
        productInfo(){
            console.log("productInfo")
            this.$router.push({ path:'/productInfo'}).catch(data=>{})
        },
        body(){
            console.log("body")
            this.$router.push({ path:'/formBody'}).catch(data=>{})
        }
    }
}
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>