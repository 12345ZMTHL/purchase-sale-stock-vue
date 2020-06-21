import Vue from 'vue'
import Router from 'vue-router'
import FormHead from '../views/formHead/list.vue'
import FormBody from '../views/formBody/list.vue'
import ProductInfo from '../views/product/list.vue'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/formHead',
          name: 'FormHead',
          component: FormHead
        },
        {
          path: '/formBody',
          name: 'FormBody',
          component: FormBody
        },
        {
          path: '/productInfo',
          name: 'ProductInfo',
          component: ProductInfo
        }
      ]
    },
    
  ]
})
