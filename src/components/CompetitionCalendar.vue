<template>
  <div class="competition-calendar">
    <div v-if="item">
      <!-- item.competition.plan == 'TIER_ONE' -->
      <!-- {{ item }} -->
      <span>Match date: {{ item.utcDate }}</span
      ><br />
      <span v-if="item.awayTeam && item.awayTeam.name"
        >Away Team: {{ item.awayTeam.name }}</span
      ><br />
      <span v-if="item.homeTeam && item.homeTeam.name"
        >Home Team: {{ item.homeTeam.name }}</span
      ><br />
      <span>Status: {{ item.status }}</span>
    </div>
    <!-- <div v-else>Sorry, these data are not with a free tier</div> -->
  </div>
</template>

<script>
export default {
  name: "CompetitionCalendar",
  props: {
    item: null,
  },
};
</script>

<style scoped>
.competition-calendar {
  padding: 20px;
  width: 350px;
  /* cursor: pointer; */
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

/* .competition-calendar:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>
