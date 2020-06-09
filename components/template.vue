<template>
    <div>
        <input id="toggle-all" class="toggle-all" type="checkbox" @click="checkallSon">
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<li v-for="item in AllData" :key="item.id" :class="{completed:item.judge}">
				<div v-show="dbupdateJudge==-1 || dbupdateJudge!=(item.id)">
					<input class="toggle" type="checkbox" :checked="item.judge==true" @click="changejudge(item.id)">
					<label @dblclick="dbupdate(item.id)">{{item.content}}</label>
					<button class="destroy" @click="deletelistSon(item.id)"></button>
				</div>
				<div v-show="dbupdateJudge==(item.id)">
					<form @submit="updatelistSon(item.id,item.content)">
				        <input class="new-todo" v-model="item.content">
			        </form>
				</div>
			</li>
		</ul>
    </div>
</template>
<style lang="css" scoped>

</style>
<script>
/** 子组件模板 */
export default {
  //父子组件的传值 将父组件的AllData值传递给子组件
    props:['AllData'],
    data:function(){
      return {dbupdateJudge:-1}
	},
	methods:{
		changejudge(id){//改变状态的方法
			this.$store.commit('changeJudge',id);
		},
		deletelistSon(id){//根据id删除对应数据
			this.$store.commit('deletelist',id);
		},
		checkallSon(){//是否全选
			this.$store.commit('checkall');
		},
		dbupdate(id){//双击修改
			this.dbupdateJudge=id;
		},
		updatelistSon(id,content){//修改数据
			var arr = [id,content];
			this.$store.commit('updatalist',arr);
			this.dbupdateJudge=-1;
		}


	}
}
</script>