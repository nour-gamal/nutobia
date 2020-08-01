<template>
  <v-app>
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      dark
      temporary
      class="red darken-1"
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in listItems"
            :key="item.icon"
            :to="item.link"
          >
            <v-list-item-title>
              <v-icon left> {{ item.icon }}</v-icon> {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!--Nav bar start-->

    <v-app-bar app dark class="red darken-1">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer"
          >Nutopia Meetups</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          class="red darken-1"
          v-for="item in listItems"
          :key="item.icon"
          :to="item.link"
        >
          <v-icon left> {{ item.icon }}</v-icon
          >{{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
export default Vue.extend({
  name: "App",

  components: {},

  data() {
    return {
      sideNav: null,
    };
  },
  computed: {
    listItems() {
      let listItems = [
        { icon: "mdi-key", title: "Sign up", link: "/signup" },
        { icon: "mdi-lock-open", title: "Sign in", link: "/signin" },
      ];
      if (this.userIsAuthenticated) {
        listItems = [
          {
            icon: "mdi-account-supervisor",
            title: "View Meetups",
            link: "/meetups",
          },
          {
            icon: "mdi-account-multiple-plus",
            title: "Organize Meetup",
            link: "/meetups/new",
          },
          { icon: "mdi-face", title: "Profile", link: "/profile" },
        ];
      }
      return listItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
});
</script>
