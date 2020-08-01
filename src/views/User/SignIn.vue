<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="mt-13">
          <v-card-text>
            <v-container>
              <v-layout row>
                <v-flex xs12>
                  <h2 class="text-center mb-3 success--text">
                    Sign In to Nutopia
                  </h2>
                  <v-form @submit.prevent="onSignIn">
                    <v-text-field
                      type="email"
                      name="email"
                      label="Email"
                      v-model="email"
                      id="email"
                      :rules="['Required']"
                      outlined
                      rounded
                    ></v-text-field>
                    <v-text-field
                      type="password"
                      name="password"
                      label="Password"
                      v-model="password"
                      id="password"
                      :rules="['Required']"
                      outlined
                      rounded
                    ></v-text-field>
                    <v-btn class="error" type="submit">Sign In</v-btn>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
