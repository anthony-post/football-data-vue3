<template>
  <div class="events">
    <h1>All competitions</h1>
    <p>
      There is a list of competitions with
      <a href="https://www.football-data.org/coverage" target="_blank"
        >FREE subscription</a
      >,<br />
      so there are two years (2018 and 2021) available only.
    </p>
    <div>
      <p>
        Click the card below to get a calendar of the particular competition
      </p>
    </div>
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
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
    <EventCard
      v-for="(event, index) in filteredEvents"
      :key="index"
      :event="event"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
      search: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data.competitions;
        // this.events = response.data;
        console.log(this.events);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filteredEvents() {
      var result = [];
      var length = this.events.length;

      if (!this.search) {
        return this.events;
      } else {
        for (var i = 0; i < length; i++) {
          if (
            this.events[i].currentSeason &&
            this.events[i].currentSeason.startDate &&
            this.events[i].currentSeason.startDate.indexOf(this.search) != -1
          ) {
            result.push(this.events[i]);
          }
        }
        return result;
      }
    },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
