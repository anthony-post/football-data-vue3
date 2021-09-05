<template>
  <div class="competition-list">
    <h2>Competition calendar for id: {{ id }}</h2>
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
    <CompetitionCalendar
      v-for="item in filteredCalendar"
      :key="item.id"
      :item="item"
    />
    <!-- <h2>All Teams in Particular Competition</h2>
    <TeamCard v-for="team in teams" :key="team.id" :team="team" /> -->
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import CompetitionCalendar from "@/components/CompetitionCalendar.vue";
// import TeamCard from "@/components/TeamCard.vue";

export default {
  name: "EventDetails",
  components: {
    CompetitionCalendar,
    // TeamCard,
  },
  props: ["id"],
  data() {
    return {
      competitionCalendar: [],
      search: null,
      // teams: null,
    };
  },
  created() {
    EventService.getCompetitionCalendar(this.id)
      .then((response) => {
        this.competitionCalendar = response.data.matches;
        // this.competitionCalendar = response.data;
        console.log(this.competitionCalendar);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filteredCalendar() {
      var result = [];
      var length = this.competitionCalendar.length;

      if (!this.search) {
        return this.competitionCalendar;
      } else {
        for (var i = 0; i < length; i++) {
          if (
            this.competitionCalendar[i].season &&
            this.competitionCalendar[i].season.startDate &&
            this.competitionCalendar[i].season.startDate.indexOf(this.search) !=
              -1
          ) {
            result.push(this.competitionCalendar[i]);
          }
        }
        return result;
      }
    },
  },
};
</script>

<style scoped>
.competition-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
