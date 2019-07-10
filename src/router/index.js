import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/font/Home'
import content from '../components/font/Content';
import list from '../components/font/List';
import label from '../components/font/Label';
import editor from '../components/admin/index';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/content',
      name: 'Content',
      component: content
    },
    {
      path: '/list',
      name: 'List',
      component: list
    },
    {
      path: '/label',
      name: 'Label',
      component: label
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    }
  ]
})
