import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#388E3C",
        secondary: "#1976D2"
      },
      dark: {
        primary: "#388E3C",
        secondary: "#1976D2"
      }
    }
  }
});
