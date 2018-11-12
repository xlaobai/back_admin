<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="导航类型">
        <el-input v-model="form.catename"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
</el-form>
</template>

<script>
import natives from '@/assets/js/axios.js';

export default {
  name: "navAdd",
  data() {
    return {
      form: {
        catename: ""
      }
    };
  },
  methods: {
    async onSubmit() {
        if( this.form.catename == '' ) {
            this.$message.error('类型不为空!');
            return;
        }
        let res = await natives.post('/api/cate/add', this.form);
        if( res.state == 1 ) {
            this.$message.success('增加成功！');
        } else {
            this.$message.error('增加失败！');
        }
        this.$router.push('/home/nav/index');
    },
    back() {
        this.$router.go(-1);
    }
  },
  created(){
  }
};
</script>

<style lang="scss">
</style>

