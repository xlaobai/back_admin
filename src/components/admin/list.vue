<template>
<div class="admin">
    <div class="header">
        <div class="bread">
            <a href="/">首页</a>
            <span>/</span>
            <a href="/" class="active">管理列表</a>
        </div>
        <el-button size="mini" type="success" @click="handleAdd">增加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="管理员" header-align="center">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>住址: {{ scope.row.address ? scope.row.address : '无' }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.username }}</el-tag>
                </div>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="日期" width="200" header-align="center">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.logintime | exDate }}</span>
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
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total">
        </el-pagination>
        <confirm-box v-if="mboxStatus" :routePath="delPath" @hide-confirm="hideConfirm" @get-list="getList"></confirm-box>
    </div>
</template>

<script>
import confirmbox from '../common/confirmbox'
import natives from '@/assets/js/axios';
import util from '@/assets/js/util';

export default {
    name: 'adminList',
    data() {
        return {
            tableData: [],
            delPath: "",
            mboxStatus: false,
            pageSize: 3,
            total: 0,
            currentPage: 1,
            tempData: [],
        }
    },
    async created() {
        await this.getList();
        let time = util.exDate(1111111111111);
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
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            let leng = 0;
            let dataArr = [];
            if( this.total <= this.pageSize*this.currentPage ){
                leng = this.total-1;
            } else {
                leng = this.pageSize*this.currentPage-1;
            }
            for( let i = this.pageSize*(this.currentPage-1); i <= leng; i++ ) {
                dataArr.push(this.tempData[i]);
            }
            this.tableData = dataArr;
        },
        async getList() {
            let res = await natives.get('/api/admin/lst');
            if(res.state == 1) {
                this.tempData = res.data;
                this.total = res.data.length;
                this.currentPage = 1;
                if( this.total <= this.pageSize ) {
                    this.tableData = res.data;
                } else {
                    for( let i = this.pageSize*(this.currentPage-1); i <= this.pageSize*this.currentPage-1; i++ ) {
                        this.tableData.push(this.tempData[i]);
                    }
                }
            } 
        },
        handleEdit(index, id) {
            this.changeRouter(`/edit/${id}`)
        },
        handleDelete(index, id) {
            this.mboxStatus = true
            this.delPath = `/api/admin/del?id=${id}`;
        },
        handleAdd() {
            this.changeRouter(`/add`)
        },
        changeRouter(path) {
            this.$router.push({
                path: `/home/admin${path}`
            })
        },
        hideConfirm(){
            this.mboxStatus = false
        }
    },
    filters: {
        exDate: function(value) {
            return util.exDate(Number(value)*1000, 1);
        }
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

