<template>
  <v-container>
    <v-layout row no-rap>
      <v-flex xs-12>
        <v-card class="success--text">
          <v-card-title>
            <h2 class="mx-auto mb-8">{{ meetup.title }}</h2>
          </v-card-title>
          <v-img :src="meetup.imgUrl"> </v-img>
          <v-card-text>
            <v-card-subtitle
              >Date: {{ meetup.date }}<br />Time: {{ meetup.time
              }}<br />Location {{ meetup.location }}
            </v-card-subtitle>
            <v-card-title>{{ meetup.description }}</v-card-title>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="error">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>
