<template>
                            <!-- filter会将数据过滤一遍 筛选符合的数据 -->
    <info :AllData="$store.state.datalist.filter(d=>!d.judge)"></info>
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