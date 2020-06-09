<template>
    <div>
        <footer class="footer">
		    <span class="todo-count" ><strong>{{number}}items</strong></span>
		    <ul class="filters">
			    <li>
				    <router-link to="/">All</router-link>
			    </li>
			    <li>
				    <router-link to="/activetem">Active</router-link>
			    </li>
			    <li>
				    <router-link to="/completedtem">Completed</router-link>
			    </li>
		    </ul>
		    <button class="clear-completed" v-show="this.$store.state.datalist.filter(d=>d.judge).length>0" @click="clearlistEDSon">Clear completed</button>
	    </footer>
	</div>
</template>
<style lang="css" scoped>

</style>
<script>
    /** 底部选项卡切换 */
export default {
	data:function(){
		return {}
	},
	methods:{
		clearlistEDSon(){
			this.$store.commit('clearlistED');
		}
	},
	//计算属性
    computed:{
		number:function(){
			// console.log(this.$route.path+"---");
			if(this.$route.path=="/"){
				return this.$store.state.datalist.length;
			}
			if(this.$route.path=="/activetem"){
				return this.$store.state.datalist.filter(d=>!d.judge).length;
			}
			if(this.$route.path=="/completedtem"){
				return this.$store.state.datalist.filter(d=>d.judge).length;
			}
		}
    }
}
</script>