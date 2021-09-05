import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import TeamList from "../views/TeamList";
import TeamDetails from "../views/TeamDetails.vue";
import CompetitionList from "../views/CompetitionList.vue";
import Welcome from "../views/Welcome.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/competitions",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/competitions/:id/matches",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/teams",
    name: "TeamList",
    component: TeamList,
  },
  {
    path: "/teams/:id/matches",
    name: "TeamDetails",
    props: true,
    component: TeamDetails,
  },
  {
    path: "/allcompetition",
    name: "CompetitionList",
    component: CompetitionList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
