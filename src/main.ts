import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import './index.scss';

import { itisok } from './itisok';

const AppRoot = Vue.extend(App);
const root: any = document.getElementById('app');
const app = new AppRoot({
  el: root,
  propsData: { itisok },
});
