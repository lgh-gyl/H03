import '../node_modules/todomvc-common/base.css'
import '../node_modules/todomvc-app-css/index.css'
import './css/app.css'
import Vue from 'vue'
import App from '../src/components/app.vue'
import router from './router/todoRouter.js'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        datalist:[{id:1,content:'吃饭',judge:true},
                    {id:2,content:'敲代码',judge:false},
                    {id:3,content:'睡觉',judge:false}],
        count:1,
        sumAll:''
    },               ///shuaiqi1
    
    mutations:{
        addlist(state,contents){//新增数据
            var idd = state.datalist.length+1;
            state.datalist.push({id:idd,content:contents,judge:false});
        },
        changeJudge(state,id){//改变状态
            for(let i=0;i<state.datalist.length;i++){
                if(state.datalist[i].id == id){
                    if(state.datalist[i].judge==false){
                        state.datalist[i].judge=true;
                    }else{
                        state.datalist[i].judge=false;
                    }           
                }
            }
        },
        deletelist(state,id){//删除数据
            for(let i=0;i<state.datalist.length;i++){
                if(state.datalist[i].id == id){
                    state.datalist.splice(i,1);
                }
            }
        },
        checkall(state){//是否全选
            if(state.count%2==1){
                for(let i=0;i<state.datalist.length;i++){
                    state.datalist[i].judge=true;
                }
            }else{
                for(let i=0;i<state.datalist.length;i++){
                    state.datalist[i].judge=false;
                }
            }
            state.count++;
        },
        updatalist(state,arr){//修改数据
            for(let i=0;i<state.datalist.length;i++){
                if(state.datalist[i].id == arr[0]){
                    state.datalist[i].content=arr[1];
                }
            }
        },
        clearlistED(state){//删除已经完成的事情
            for(let i=0;i<state.datalist.length;i++){
                if(state.datalist[i].judge==true){
                    state.datalist.splice(i,1);
                }
            }
        }
    }
})
//自动获得焦点
Vue.directive('focus',{
    inserted:function(el){
        el.focus();
    }
})
new Vue({
    router,
    store,
    render:h=>h(App)
}).$mount("#app")
////张三






