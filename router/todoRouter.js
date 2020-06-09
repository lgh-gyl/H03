import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/',components:{
            input:()=>import('../components/input.vue'),
            datashow:()=>import('../components/all.vue'),
            info:()=>import('../components/info.vue')
        }},
        {path:"/alltem",components:{
            input:()=>import('../components/input.vue'),
            datashow:()=>import('../components/all.vue'),
            info:()=>import('../components/info.vue')
        }},
        {path:"/activetem",components:{
            input:()=>import('../components/input.vue'),
            datashow:()=>import('../components/active.vue'),
            info:()=>import('../components/info.vue')
        }},
        {path:"/completedtem",components:{
            input:()=>import('../components/input.vue'),
            datashow:()=>import('../components/completed.vue'),
            info:()=>import('../components/info.vue')
        }},
    ]
})

export default router