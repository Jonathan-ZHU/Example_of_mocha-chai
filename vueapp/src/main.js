// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//provide usage like $http.get
import vueRes from 'vue-resource'
//router
import VueRouter from 'vue-router'
import App from './App'

import Users from './components/Users'
import Test from './components/Test'

Vue.config.productionTip = false

//CAN USE $http.get
Vue.use(vueRes);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base:__dirname,
  routes:[
    {path:'/',component:Users},
    {path:"/test",component:Test}
  ]
});

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: `
  <div id="app">
    <ul>
      <li><router-link to="/">Users</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
  `,
  //components: { App }
}).$mount("#app")
