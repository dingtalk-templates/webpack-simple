import Vuex from 'vuex';
import App from '../../container/App.vue';

new Vue(Vue.util.extend({
  el:'#root',
  router
},App));

router.push('/')
