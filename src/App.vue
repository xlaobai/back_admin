<template>
  <div id="app" v-loading="loading" element-loading-text="拼命加载中" 
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    loading: function() {
      return this.$store.state.isLoading
    }
  },
  created() {
    this.$store.commit('changeLoading', true);
    if(!localStorage.getItem('aid'))
    {
      this.$router.push('/login');
    }
    if( window.location.pathname == "/" ) 
    {
      this.$router.push('/home');
    }
  },
}
</script>

<style lang="scss">
html, body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

</style>
