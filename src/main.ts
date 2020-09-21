import { createApp, h } from 'vue';
import App from './App.vue';

import './index.scss';

import { itisok } from './itisok';

const app = createApp(
  {
    render: () => h(App),
  },
  {
    itisok,
  },
);

app.mount('#app');
