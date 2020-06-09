<template>
    <info :AllData="$store.state.datalist"></info>
</template>
<style lang="css" scoped>

</style>
<script>
    /** 展示已完成数据 */ 
//引入模板
import tem from './template.vue'
export default {
    //添加组件
    components:{
        info:tem
    }
}
</script>