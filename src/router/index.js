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
import upload from '@/components/formdata/upload'
import parent from '@/components/params/parent'
import pdf from '@/components/pdf/pdf'
import cropper from '@/components/cropper/cropper'
import author from '@/components/author/author'
Vue.use(Router)
export default new Router({
  //mode: 'history',
  routes: [
      {
      path: '/',
      name: 'home',
      component: home,
        children:[
            {path:"/",redirect:"/firstPage",
                meta: {
                title: '首页'
            }
            },
            {path:"/firstPage",name:"firstPage",component:firstPage,
              meta:{
                title: '首页'
               }
            },
            {path:"/dongTai",name:"dongTai",component:dongTai,
                meta:{
                    title: '动态'
                }
            },
            {path:"/center",name:"center",component:center,
                meta:{
                    title: '个人中心'
                }
            }
        ]
    },
      {path:'/earn', name:'earn', component:earn,
          meta:{
              title: '来赚钱'
          }
      },
      {path:'/travel', name:'travel', component:travel,
          meta:{
              title: '旅行'
          }
      },
      {path:'/house', name:'house', component:house},
      {path:'/upload', name:'upload', component:upload},
      {path:'/projectDetail/:id', name:'projectDetail', component:projectDetail,
          meta:{
              title: '项目详情'
          }
      },
      {path:'/parent', name:'parent', component:parent,
          meta:{
              title: '父级元素'
          }
      },
      {path:'/pdf', name:'pdf', component:pdf,
          meta:{
              title: 'pdf'
          }
      },
      {path:'/cropper', name:'cropper', component:cropper,
          meta:{
              title: 'cropper'
          }
      },
      {path:'/author', name:'author', component:author,
          meta:{
              title: '验证'
          }
      }
  ]
})
