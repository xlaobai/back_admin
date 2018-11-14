<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
    </el-form-item>
    <el-form-item label="关键字">
        <el-input v-model="form.keywords"></el-input>
    </el-form-item>
    <el-form-item label="简介">
        <el-input v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="类型">
        <el-select v-model="form.cateid" placeholder="请选择类型" style="float: left;">
            <el-option v-for="(item, index) in cateList" :key="index" :label="item.catename" :value="item.id"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="是否推荐" >
        <el-switch v-model="switchState" style="float: left;"></el-switch>
    </el-form-item>
    <el-form-item label="缩略图">
        <el-upload
            class="upload-demo"
            :action="action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            multiple
            name="pic"
            :file-list="fileList"
            style="float: left;">
        <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
    </el-form-item>
    <el-form-item label="内容">
        <el-input v-model="form.content" type="textarea"></el-input>
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
                title: "",
                author: "",
                keywords: "",
                desc: "",
                pic: "",
                cateid: 1,
                content: "",
                state: 0
            },
            switchState : false,
            tempPassWd : "",
            cateList: [],
            fileList: [
            ],
            fileTemp: [],
            action: ''
        };
    },
    computed: {
    },
    methods: {
        async onSubmit() {
            let res = await natives.post(`/api/art/edit`, this.form);
            if( res.state == 1 ) {
                this.$message.success('编辑成功！');
            } else {
                this.$message.error('编辑失败！');
            }
            this.$router.push('/home/article/index');
        },
        back() {
            this.$router.go(-1);
        },
        handleRemove(file, fileList) {
            this.form.pic = "";
        },
        handlePreview(file) {
            // console.log(file);
        },
        handleSuccess(res, file, fileList) {
            if( res.state == 1 ) {
                this.form.pic = res.data.pic;
                this.fileList = [
                    {
                        name: file.name,
                        url: `${axios.defaults.baseURL}/static/temp/${res.data.pic}`
                    }
                ];
            }
        }
    },
    created() {
        this.action = `${axios.defaults.baseURL}/api/upload/file?user_id=${localStorage.getItem('aid')}&token=${localStorage.getItem('token')}`;
        natives.get(`/api/art/lst?id=${this.$route.params.id}`).then((res) => {
            this.form.id = res.data[0].id;
            this.form.title = res.data[0].title;
            this.form.author = res.data[0].author;
            this.form.keywords = res.data[0].keywords;
            this.form.desc = res.data[0].desc;
            this.form.cateid = res.data[0].cateid;
            this.form.state = res.data[0].state;
            this.switchState = res.data[0].state == 0 ? true : false ;
            this.form.content = res.data[0].content;
            if( res.data[0].pic ) {
                this.form.pic = res.data[0].pic;
                this.fileList = [
                    {
                        name: 'edit.jpeg',
                        url: `${axios.defaults.baseURL}/static/upload/${res.data[0].pic}`
                    }
                ];
            }
        })

        natives.get(`/api/cate/lst`).then((res) => {
            this.cateList = res.data;
        })
    },
    watch: {
        switchState(newState, oldState) {
            newState ? this.form.state = 1 : this.form.state = 0;
        }
    }
};
</script>

<style lang="scss">

</style>

