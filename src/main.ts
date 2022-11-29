import { createApp } from 'vue';

import App from './App.vue';
import { createVuestic } from 'vuestic-ui';
import 'vuestic-ui/css';
import 'material-design-icons-iconfont/dist/material-design-icons.min.css';

const app = createApp(App);
app.use(createVuestic());
app.mount('#app');

import './index.css';
