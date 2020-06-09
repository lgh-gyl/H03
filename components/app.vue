<template>
    <div>
        <section class="todoapp">
            <!-- 命名视图 -->
            <router-view name="input"></router-view>
            <router-view name="datashow"></router-view>
            <router-view name="info"></router-view>
        </section>
    </div>
</template>
<style lang="css" scoped>

</style>
<script>
export default {
    //底部选项卡切换
}
</script>