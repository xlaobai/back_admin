<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="地址">
        <el-input v-model="form.address" placeholder="无"></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
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
  name: "adminAdd",
  data() {
    return {
      form: {
        username: "",
        address: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
        if( this.form.username == '' ) {
            this.$message.error('用户名不为空!');
            return;
        }
        let res = await natives.post('/api/admin/add', this.form);
        if( res.state == 1 ) {
            this.$message.success('增加成功！');
        } else {
            this.$message.error('增加失败！');
        }
        this.$router.push('/home/admin/index');
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

