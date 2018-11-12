<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
</el-form>
</template>

<script>
import natives from '@/assets/js/axios.js';

export default {
    name: "articleEdit",
    data() {
        return {
            form: {
                username: "",
                password: "",
                address: ""
            },
            tempPassWd : ""
        };
    },
    methods: {
        async onSubmit() {
            let res = await natives.post(`/api/admin/edit`, this.form);
            if( res.state == 1 ) {
                this.$message.success('编辑成功！');
            } else {
                this.$message.error('编辑失败！');
            }
            this.$router.push('/home/admin/index');
        },
        back() {
            this.$router.go(-1);
        }
    },
    created() {
        natives.get(`/api/admin/lst?id=${this.$route.params.id}`).then((res) => {
            this.form.username = res.data[0].username;
            this.form.address = res.data[0].address;
            this.form.id = res.data[0].id;
        })
    }
};
</script>

<style lang="scss">

</style>

