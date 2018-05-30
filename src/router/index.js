import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/pages/home'
import firstPage from '@/components/firstPage'
import dongTai from '@/components/dongtai'
import center from '@/components/center'
import earn from '@/components/earn/earn'
import travel from '@/components/travel'
import house from '@/components/viewHouse'
import projectDetail from '@/components/project-detail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
        children:[
            {path:"/",redirect:"/firstPage"},
            {path:"/firstPage",name:"firstPage",component:firstPage},
            {path:"/dongTai",name:"dongTai",component:dongTai},
            {path:"/center",name:"center",component:center}
        ]
    },
      {path:'/earn', name:'earn', component:earn},
      {path:'/travel', name:'travel', component:travel},
      {path:'/house', name:'house', component:house},
      {path:'/projectDetail/:id', name:'projectDetail', component:projectDetail}
  ]
})
