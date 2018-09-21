<template>
    <el-header>
      <el-row>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="2"><div class="logo">后台管理</div></el-col>
        <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2"><div class="pos-tips"><img :src="logoUrl" alt="logo"></div></el-col>
        <el-col :xs="0" :sm="7" :md="9" :lg="11" :xl="15"><div class=""></div></el-col>
        <el-col :xs="20" :sm="11" :md="9" :lg="8" :xl="5">
          <div class="opt">   
            <el-dropdown @command="handleCommand">
              <el-button size="small" type="success">
                LUSIXIN<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div :class="{ active: inputStatus, sear: true}">
              <div class="sear-logo"><i class="el-icon-search"></i></div>
              <div class="sear-text">
                <input type="text" v-on:focus="inputFocus" @blur="inputBlur">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
</template>

<script>
export default {
    name: 'backheader',
    data() {
        return {
          logoUrl: require('../../assets/img/xlaobai.png'),
          inputStatus: false
        }
    },
    methods: {
      handleCommand(command) {
        if(command == "logout") {
          this.logout();
        }
      },
      logout() {
        this.$store.commit('changeLoading', true);
        localStorage.removeItem('aid');
        localStorage.removeItem('token');
        this.$router.push('/login');
      },
      inputFocus() {
        this.inputStatus = true
      },
      inputBlur() {
        this.inputStatus = false
      }
    }
}
</script>

<style lang="scss">
.el-header {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  .el-col {
    min-height: 60px;
  }

  .logo {
    height: 60px;
    line-height: 60px;
    font-size: 24px;    
  }

  .pos-tips {
    text-align: left;

    img {
      margin-top: 17px;
      width: 25px;
      height: 30px;
    }
  }

  .opt {
    padding-top: 14px;

    .sear {
      display: inline-block;
      float: right;
      border: 1px solid #e4f5ef;
      border-radius: 20px;
      padding: 0px 10px;
      height: 30px;
      background-color: #f7fcfa;
      margin-right: 20px;

      .sear-logo {
        display: inline-block;
        float: left;
        height: 30px;
        line-height: 30px;
        padding: 0px 8px 0px 3px;
        i{
          font-size: 12px;
          font-weight: 600;
          color: #88a3be;        
        }
      }

      .sear-text {
        display: inline-block;
        height: 30px;
        input {
          border: none;
          height: 28px;
          outline: none;
          background-color: transparent;
        }
      }

      
    }

    .active {
      box-shadow: 0 0 10px #42b983;
    }

    .el-dropdown {
      vertical-align: top;
      float: right;
    }
    .el-dropdown + .el-dropdown {
      margin-left: 15px;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }

    .el-button {
      border-radius: 20px;  
      background-color: #42b983;  
    }
  }
}

@media only screen and (max-width: 500px){
  .el-header .opt .sear {
    display: none;
  }
}
</style>

