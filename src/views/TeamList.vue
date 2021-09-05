<template>
  <h1>Teams</h1>
  <p>
    There is a list of all teams in England only due to some restrictions.
    <br />
    <a href="https://www.football-data.org/about" target="_blank"
      >The owner of the API</a
    >
    says there is no a link for the request of all teams.
  </p>
  <div>
    <p>Click the card below to get a calendar of the particular team</p>
  </div>
  <div class="areas">
    <TeamCard v-for="team in teams" :key="team.id" :team="team" />
  </div>
</template>

<script>
import TeamCard from "@/components/TeamCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "TeamList",
  components: {
    TeamCard,
  },
  data() {
    return {
      teams: null,
    };
  },
  created() {
    EventService.getTeams()
      .then((response) => {
        this.teams = response.data.teams;
        console.log(this.teams);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.areas {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
