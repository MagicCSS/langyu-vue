import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AllView from '@/components/AllView'
import Case from '@/components/Case'
import CaseDetail from '@/components/CaseDetail'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Index
    },
    {
      path: '/allView',
      component: AllView
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/caseDetail/:title',
      component: CaseDetail
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
