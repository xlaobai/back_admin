<template>
    <div>
        <backHeader></backHeader>
        <div class="main">
        <sider></sider>   
        <el-main>
            <router-view></router-view>
        </el-main>
        </div>
    </div>
</template>

<script>
import vuepng from '@/assets/logo.png'
import backHeader from '@/components/common/backheader'
import sider from '@/components/common/sider'

export default {
    name: 'home',
    data () {
    return {
      vuepng: vuepng,
        }
    },
    components: {
        backHeader,
        sider
    },
    mounted: function () {
        this.$nextTick(function () {
            this.$store.commit('changeLoading', false);
        })
    }
}
</script>

<style lang="scss">

.main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow: hidden;
    width: 100%;
}

.el-main {
  overflow-y: scroll;
}
</style>

