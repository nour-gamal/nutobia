import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/Home.vue";
import CreateMeetUps from "@/views/Meetup/CreateMeetups.vue";
import MeetUps from "@/views/Meetup/Meetups.vue";
import Meetup from "@/views/Meetup/Meetup.vue";
import Profile from "@/views/User/Profile.vue";
import SignIn from "@/views/User/SignIn.vue";
import SignUp from "@/views/User/SignUp.vue";

Vue.use(VueRouter);

export default new VueRouter({ 
  routes:[
    {
        path: "/",
        name: "Home",
        component: home
    },
    {
      path: "/meetups",
      name: "MeetUps",
      component: MeetUps
    },
    {
        path: "/meetups/new",
        name: "CreateMeetUps",
        component: CreateMeetUps
    },
    
    {
      path:"/meetups/:id",
      name:"Meetup",
      props:true,
      component:Meetup
    },
    {
    path: "/profile",
    name: "Profile",
    component: Profile
    },
    {
    path: "/signin",
    name: "SignIn",
    component: SignIn
    },
    {
  path: "/signup",
  name: "SignUp",
  component: SignUp
    }
],
mode:'history'
})
