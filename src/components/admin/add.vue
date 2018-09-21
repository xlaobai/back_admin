<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="地址">
        <el-input v-model="form.address" placeholder="无"></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
  name: "adminAdd",
  data() {
    return {
      form: {
        name: "",
        address: "",
        password: ""
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
  created(){
  }
};
</script>

<style lang="scss">
</style>

