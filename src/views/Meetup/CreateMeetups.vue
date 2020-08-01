<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="text-center info--text mb-9">Create a new Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                :rules="['Required']"
                outlined
                rounded
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                :rules="['Required']"
                outlined
                rounded
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imgUrl"
                label="Image URL"
                id="imgUrl"
                v-model="imgUrl"
                :rules="['Required']"
                outlined
                rounded
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img
                :src="imgUrl"
                alt="Make sure your URL is valid "
                height="300px"
                :class="imgUrlValid"
                class="mb-3"
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                v-model="description"
                :rules="['Required']"
                outlined
                rounded
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 offset-sm-3 sm6 class="mb-2">
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 offset-sm-3 sm6>
              <v-time-picker v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs6 offset-xs-3 class="mt-13 mx-auto">
              <v-btn class="primary" :disabled="!isValid" type="sumbit"
                >Create Meetup</v-btn
              >
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imgUrl: "",
      description: "",
      color: "success",
      date: new Date().toISOString().substr(0, 10),
      time:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };
  },
  computed: {
    isValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imgUrl !== "" &&
        this.description !== ""
      );
    },
    imgUrlValid() {
      return this.imgUrl !== "" ? "d-flex" : "d-none";
    },
  },
  methods: {
    onCreateMeetup() {
      if (!this.isValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imgUrl: this.imgUrl,
        description: this.description,
        color: this.color,
        date: this.date,
        time: this.time,
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$$router.push("/meetup");
    },
  },
};
</script>
