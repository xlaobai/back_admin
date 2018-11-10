<template>
<div class="admin">
    <div class="header">
        <div class="bread">
            <a href="/">首页</a>
            <span>/</span>
            <a href="/" class="active">标签列表</a>
        </div>
        <el-button size="mini" type="success" @click="handleAdd">增加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="管理员" header-align="center">
            <template slot-scope="scope">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="日期" width="200" header-align="center">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作"  width="200" header-align="center">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row.id)">
                    编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination small background layout="prev, pager, next" :total="50">
        </el-pagination>
        <confirm-box v-show="mboxStatus" :item-id="delId" v-on:hide-confirm="hideConfirm"></confirm-box>
    </div>
</template>

<script>
import confirmbox from '../common/confirmbox'

export default {
    name: 'adminList',
    data() {
        return {
            tableData: [{
                id: 1,
                date: '2016-05-02',
                name: '热门'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '推荐'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '搞笑'
            }],
            delId: 0,
            mboxStatus: false
        }
    },
    methods: {
        handleEdit(index, id) {
            this.changeRouter(`/edit/${id}`)
        },
        handleDelete(index, id) {
            this.mboxStatus = true
            this.delId = id
        },
        handleAdd() {
            this.changeRouter(`/add`)
        },
        changeRouter(path) {
            this.$router.push({
                path: `/home/tag${path}`
            })
        },
        hideConfirm(){
            this.mboxStatus = false
        }
    },
    mounted(){
        this.$nextTick(() => {
            // this.$message({
            //     type: 'success',
            //     message: '删除成功!'
            // });
        })
    },
    components: {
        'confirm-box': confirmbox
    }
}
</script>

<style lang="scss" scoped>
.admin {
    .header {
        margin-bottom: 20px;
        height: 28px;
        .bread {
            float: left;
            display: inline-block;
            height: 28px;
            a {
                color: #606266;
                line-height: 28px;
                padding-right: 5px;
                text-decoration: none;
            }
            span {
                color: #606266;
                line-height: 28px;
                padding-right: 5px;
                font-weight: 600;
            }
            .active {
                color: #42b983;
            }
        }
        .el-button {
            float: right;
            background-color: #42b983;
        }
    }
    .el-table {
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    .el-pagination {
        padding: 15px 10px;
    }
}
</style>

