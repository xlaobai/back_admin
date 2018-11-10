<template>
<el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="标签">
        <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
  name: "adminEdit",
  data() {
    return {
      form: {
        name: "",
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
      console.log(this.$route.params.id);
  }
};
</script>

<style lang="scss">
</style>

