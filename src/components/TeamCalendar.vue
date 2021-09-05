<template>
  <div class="team-calendar">
    <!-- <div>{{ itemTeam }}</div> -->
    <div v-if="itemTeam">
      <span
        v-if="
          itemTeam.competition &&
          itemTeam.competition.area &&
          itemTeam.competition.area.name
        "
        >Country: {{ itemTeam.competition.area.name }}</span
      ><br />
      <span v-if="itemTeam.competition && itemTeam.competition.name"
        >Competition: {{ itemTeam.competition.name }}</span
      ><br />
      <span v-if="itemTeam.homeTeam && itemTeam.homeTeam.name"
        >Home Team: {{ itemTeam.homeTeam.name }}</span
      ><br />
      <span>Match date: {{ itemTeam.utcDate }}</span
      ><br />
      <span>Status: {{ itemTeam.status }}</span
      ><br />
      <span v-if="itemTeam.score && itemTeam.score.winner"
        >Winner: {{ itemTeam.score.winner }}</span
      ><br />
      <!-- <span
        v-if="
          item.status == 'FINISHED' &&
          item.score &&
          item.score.fulltime &&
          item.score.fulltime.awayTeam &&
          item.score.fulltime.homeTeam
        "
        >Score: {{ item.score.fulltime.awayTeam }} _
        {{ item.score.fulltime.homeTeam }}</span
      > -->
    </div>
    <div v-else>There is now calendar for this team</div>
  </div>
</template>

<script>
export default {
  name: "TeamCalendar",
  props: {
    itemTeam: null,
  },
};
</script>

<style scoped>
.team-calendar {
  padding: 20px;
  width: 250px;
  /* cursor: pointer; */
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

/* .team-calendar:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>
