<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-center mb-6">
        <v-btn large class="info" to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-center mb-6">
        <v-btn large class="success" to="/meetups/new">Organize a meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel
          cycle
          height="400"
          show-arrows-on-hover
          style="cursor:pointer"
        >
          <v-carousel-item
            v-for="slide in meetups"
            :key="slide.id"
            :src="slide.imgUrl"
            @click="onLoadMeetup(slide.id)"
          >
            <div class="title text-center">{{ slide.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 class="text-center mt-6">
        <p>Join our amazing Meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    },
  },
};
</script>

<style scoped>
.title {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  font-size: 2em;
}
</style>
