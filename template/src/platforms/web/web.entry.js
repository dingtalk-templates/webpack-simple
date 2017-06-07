import Vue from 'vue';
import Vuex from 'vuex';
import weex from 'weex-vue-render';
weex.init(Vue);
import App from '../../container/App.vue';

new Vue(Vue.util.extend({
  el:'#root',
  router
},App));
