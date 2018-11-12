<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="导航类型">
        <el-input v-model="form.catename"></el-input>
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
    name: "navEdit",
    data() {
        return {
            form: {
                catename: ""
            },
            tempPassWd : ""
        };
    },
    methods: {
        async onSubmit() {
            let res = await natives.post(`/api/cate/edit`, this.form);
            if( res.state == 1 ) {
                this.$message.success('编辑成功！');
            } else {
                this.$message.error('编辑失败！');
            }
            this.$router.push('/home/nav/index');
        },
        back() {
            this.$router.go(-1);
        }
    },
    created() {
        natives.get(`/api/cate/lst?id=${this.$route.params.id}`).then((res) => {
            this.form.catename = res.data[0].catename;
            this.form.id = res.data[0].id;
        })
    }
};
</script>

<style lang="scss">

</style>

