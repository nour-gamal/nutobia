import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyA5t9DOlv2qiGOqmJG3NKuBtr8N9rdUhr0",
      authDomain: "nutopia-meetup.firebaseapp.com",
      databaseURL: "https://nutopia-meetup.firebaseio.com",
      projectId: "nutopia-meetup",
      storageBucket: "",
    });
  },
}).$mount("#app");
