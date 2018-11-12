<template>
    <div class="el-message-box__wrapper" style="z-index: 2001; background-color: #00000085;" @click.self="hide">
        <div class="el-message-box">
            <div class="el-message-box__header">
                <div class="el-message-box__title">
                    <span>提示</span></div><button type="button" aria-label="Close" class="el-message-box__headerbtn"><i class="el-message-box__close el-icon-close" @click.self="hide"></i></button></div>
            <div class="el-message-box__content">
                
                <div class="el-message-box__message">
                    <p>此操作将永久删除该用户, 是否继续?</p>
                </div>
                <div class="el-message-box__input" style="display: none;">
                    <div class="el-input">
                        <input type="text" autocomplete="off" placeholder="" class="el-input__inner">
                    </div>
                    <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
                </div>
            </div>
            <div class="el-message-box__btns">
                <button type="button" class="el-button el-button--default el-button--small el-button--primary " @click="del"><span>
            确定
            </span></button></div>
        </div>
    </div>
</template>

<script>
import natives from '@/assets/js/axios';

export default {
    props: [
        'routePath',
    ],
    data() {
        return {
            
        }
    },
    created(){
        console.log(this.routePath);
    },
    methods: {
        hide(){
            this.$emit('hide-confirm');
        },
        async del() {
            let res = await natives.get(this.routePath);
            if( res.state == 1 ) {
                this.$message.success('删除成功！');
            } else {
                this.$message.error('删除失败！');
            }
            this.$emit('hide-confirm');
            this.$emit('get-list');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
