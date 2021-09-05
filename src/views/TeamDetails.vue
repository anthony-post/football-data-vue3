<template>
  <div class="team-list">
    <h2>Team calendar for id: {{ id }}</h2>
    <div>
      <p>
        Choose a year
        <select v-model="search" name="#" id="#">
          <option value="">All years</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </p>
    </div>
    <TeamCalendar
      v-for="itemTeam in filteredTeamCalendar"
      :key="itemTeam.id"
      :itemTeam="itemTeam"
    />
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import TeamCalendar from "@/components/TeamCalendar.vue";

export default {
  name: "TeamDetails",
  components: {
    TeamCalendar,
  },
  props: ["id"],
  data() {
    return {
      search: null,
      teamCalendar: [],
    };
  },
  created() {
    EventService.getTeamCalendar(this.id)
      .then((response) => {
        this.teamCalendar = response.data.matches;
        console.log(this.teamCalendar);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filteredTeamCalendar() {
      var result = [];
      var length = this.teamCalendar.length;

      if (!this.search) {
        return this.teamCalendar;
      } else {
        for (var i = 0; i < length; i++) {
          if (this.teamCalendar[i].utcDate.indexOf(this.search) != -1) {
            result.push(this.teamCalendar[i]);
          }
        }
        return result;
      }
    },
  },
};
</script>

<style scoped>
.team-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
