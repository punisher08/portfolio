import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css';
import "./assets/css/styles.css";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Splide
import VueSplide from '@splidejs/vue-splide';


// or other themes
// import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';


const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.use(VueSplide);

// Initialize AOS
app.mount("#app", true).$nextTick(() => {
  AOS.init();
});
