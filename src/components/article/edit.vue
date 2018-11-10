<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="简介">
            <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="作者">
            <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="类型">
            <el-input v-model="form.cateid"></el-input>
        </el-form-item>
        <el-form-item label="是否推荐">
            <el-switch v-model="form.state"></el-switch>
        </el-form-item>
        <el-form-item label="缩略图">
            <el-input type="file"></el-input>
        </el-form-item>
        <el-form-item label="内容">
            <el-input type="textarea" v-model="form.contml"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即添加</el-button>
            <el-button @click="back">取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: "articleAdd",
    data() {
        return {
            form: {
                title: 'hello',
                desc: 'It is a second blog',
                keywords: 'word,new',
                content: '111',
                contml: '',
                author: 'xlaobai',
                pic: '/uploads/20180813/zd01.jpg',
                state: false,
                cateid: 1
            }
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
        back() {
            this.$router.go(-1);
        }
    },
    created() {}
};
</script>
<style lang="scss">
</style>