import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home'
import content from '../components/Content';
import list from '../components/List';
import label from '../components/Label';
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
    }
  ]
})
