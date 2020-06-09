<template>
    <div>
        <header class="header">
		    <h1>todos</h1>
			<form @submit="addlistSon">
				<input class="new-todo" placeholder="What needs to be done?" v-focus v-model="inp">
			</form>
	    </header>

	</div>
</template>
<style lang="css" scoped>

</style>
<script>
	/** 头部输入框 */
export default {
	data:function(){
		return {inp:""}
	},
	methods:{
		addlistSon(){
			//给datalist添加数据
			this.$store.commit("addlist",this.inp);
			this.inp = "";
		}
	}
}
</script>