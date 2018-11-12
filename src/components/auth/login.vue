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
import natives from '@/assets/js/axios.js';

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
                admin: [{
                    validator: checkAdmin,
                    trigger: 'blur'
                }],
            }
        }
    },
    methods: {
        async login() {
            this.$store.commit('changeLoading', true);
            let res = await natives.post('/api/login', {
                'admin': this.form.admin,
                'password': this.form.password
            }, false);
            if (!res) {
                this.$message.error('网络错误!');
                this.$store.commit('changeLoading', false);
            } else {
                if (res.state == 1) {
                    localStorage.setItem('aid', res.data.id);
                    localStorage.setItem('token', res.data.token);
                    this.$message.success('登录成功');
                    this.$router.push('/home');
                } else {
                    this.$message.error(`${ res.message}`);
                    this.$store.commit('changeLoading', false);
                }
            }
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            if (localStorage.getItem('aid')) {
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
    background-image: url('../../assets/img/login_back.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    top: 0px;
    bottom: 0px;
    .el-form {
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 220px auto;
        width: 350px;
        padding: 20px 35px 15px;
        background: rgba(255, 255, 255, 0.65);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.65);
        h3 {
            margin: 10px 0px 25px;
        }
        .el-button {
            width: 100%;
        }
    }
}
</style>
