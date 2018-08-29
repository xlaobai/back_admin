<template>
    <div class="loginBack">
        <el-form ref="form" :model="form" :rules="rule">
            <h3>系统登录</h3>
            <el-form-item prop="admin">
                <el-input type="text" v-model="form.admin"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        var checkAdmin = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不为空'));
            }
        } 

        return {
            form: {
                admin: 'admin',
                password: ''
            },
            rule: {
                admin: [
                    { validator: checkAdmin, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
      login() {
          this.$store.commit('changeLoading', true);
          axios.post('/api/login', {
              'admin' : this.form.admin,
              'password' : this.form.password
          }).then((res) => {
            if(res.status == 200) {
                let data = res.data;
                if( data.state == 1 ){
                    localStorage.setItem('aid', data.data.id);
                    localStorage.setItem('token', data.data.token);
                    this.$router.push('/home');
                } else {
                    this.$message.error(`${ data.message}`);
                    this.$store.commit('changeLoading', false);
                }            
            } else {
                this.$message.error('网络错误!');
                this.$store.commit('changeLoading', false);
            }
          })
      }
    },
    mounted: function () {
        this.$nextTick(function () {
            if(localStorage.getItem('aid')) {
                this.$router.push('/home')
            }
            this.$store.commit('changeLoading', false);
        })
    }
  }
</script>

<style lang="scss">
    .loginBack {
        background-color: #9e9e9e;
        position: absolute;
        width: 100%;
        top: 0px;
        bottom: 0px;

        .el-form {
            border-radius: 5px;
            -moz-border-radius: 5px;
            background-clip: padding-box;
            margin: 180px auto;
            width: 350px;
            padding: 20px 35px 15px;
            background: #fff;
            border: 1px solid #eaeaea;
            box-shadow: 0 0 25px #cac6c6;

            h3{
                margin: 10px 0px 25px;
            }

            .el-button{
                width: 100%;
            }
        }
    }
</style>
