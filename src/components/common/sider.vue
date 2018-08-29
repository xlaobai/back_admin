<template>
    <el-aside width="201px">
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-service"></i>
                <span slot="title">人员管理</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1"> 管理列表 </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">导航管理</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="2-1">导航列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-edit"></i>
                <span slot="title">文章管理</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="3-1">文章列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">标题管理</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="4-1">标签列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统配置</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="5-1">友情链接</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script>
export default {
    name: 'sider',
    data() {
      return {
          isCollapse: this.$store.state.isCollapse,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created() {
    },
}
</script>
<style lang="scss">
.el-aside{
    width: 201px;
    background-color: #e4f5ef;
    height: 100%;
    .el-menu{
        background-color: transparent;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

