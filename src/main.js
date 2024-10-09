import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap and BootstrapVue3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import BootstrapVue3 from 'bootstrap-vue-3';

// Create the Vue app instance
const app = createApp(App);

// Install BootstrapVue3
app.use(BootstrapVue3);

 app.use(router)

// Mount the app
app.mount('#app');
