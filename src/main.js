import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
// Regsiter sw
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("sw.js")
    .then()
    .catch();
}

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
