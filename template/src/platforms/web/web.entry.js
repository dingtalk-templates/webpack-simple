import Vue from 'vue';
import weex from 'weex-vue-render';
weex.init(Vue);
import Home from '../../pages/home/index.vue';

new Vue(Vue.util.extend({
  el:'#root'
},Home));
