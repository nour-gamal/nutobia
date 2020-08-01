import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imgUrl:
          "https://cdn.cheapism.com/images/Where_You_Live_or_Work.2e16d0ba.fill-1440x605.png",
        title: "Meetup in Newyork",
        id: "sdkkpodkpkdk12",
        date: "2020-9-10",
        time: "6:00:00",
        location: "Newyork",
        color: "primary",
        description: "Newyork Newyork",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
        title: "Meetup in  London ",
        id: "sddkpkdk5",
        date: "2020-12-24",
        time: "13:26:34",
        location: "London",
        color: "primary",
        description: "It's paris !",
      },
    ],
    user: null,
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        imgUrl: payload.imgUrl,
        color: payload.color,
        id: "ssss",
        date: payload.date,
        time: payload.time,
      };
      //Reach out to fireBase and store it
      commit("createMeetup", meetup);
    },
    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.user?.uid,
            registerdMeetups: [],
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.user?.uid,
            registerdMeetups: [],
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups;
    },
    featuredMeetups(state, getter) {
      return getter.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return (meetupId: string) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        });
      };
    },
    user(state) {
      return state.user;
    },
  },
});
