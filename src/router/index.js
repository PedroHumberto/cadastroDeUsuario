import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: () => import(/* webpackChunckName: "registrar"*/'../views/NovoUsuario.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      public: true
    }
  }
]


const router = new VueRouter({
  routes
})


//https://router.vuejs.org/guide/advanced/navigation-guards.html

router.beforeEach((routeTo, routeFrom, next) =>{
  if(!routeTo.meta.public && !store.state.token){
    return next({ path: 'login'})
  }
  else next()
})

export default router
