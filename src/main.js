import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

/**
 * Register service worker
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => true)
    .catch(err => {
      console.error(err);
    });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
