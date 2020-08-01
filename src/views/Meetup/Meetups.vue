<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card
          class="my-2 white--text"
          :class="meetup.color"
          v-for="meetup in meetups"
          :key="meetup.id"
        >
          <div class="d-flex flex-no-wrap ">
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="meetup.imgUrl"></v-img>
            </v-avatar>
            <div>
              <v-card-title class="headline">{{ meetup.title }}</v-card-title>
              <v-card-subtitle class="white--text"
                >Date: {{ meetup.date }} <br />
                Time: {{ meetup.time }} <br />
                Location {{ meetup.location }}</v-card-subtitle
              >
              <v-card-actions>
                <v-btn class="primary" :to="'/meetups/' + meetup.id">
                  <v-icon left> mdi-arrow-collapse-right </v-icon> View
                  Meetup</v-btn
                >
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>
