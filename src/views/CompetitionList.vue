<template>
  <div class="events">
    <h1>All Competitions</h1>
    <p>There is a list of all competitions</p>
    <div>
      <p>
        Choose a year
        <!-- 
        тестовый посимвольный ввод с фильтрацией
        <input v-model="search" type="text" placeholder="search" /> 
        -->
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
    <div class="area-card" v-for="(item, index) in filteredList" :key="index">
      <div v-if="item && item.currentSeason && item.currentSeason.startDate">
        Name: {{ item.name }}
        <div>Start date: {{ item.currentSeason.startDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  name: "CompetitionList",
  data() {
    return {
      search: null,
      events: [],
      //тестовый массив phones
      // phones: [
      //   {
      //     title: "iPhone 7",
      //     company: "Apple",
      //     season: { id: 111, startDate: "2021-11-02" },
      //   },
      //   {
      //     title: "iPhone 6S",
      //     company: "Apple",
      //     season: { id: 111, startDate: "2020-10-15" },
      //   },
      //   {
      //     title: "Galaxy S8",
      //     company: "Samsung",
      //     season: { id: 111, startDate: "2022-01-05" },
      //   },
      // ],
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
    //фильтрация массива по введенному в поле 'search' значению
    filteredList() {
      var result = [];
      var length = this.events.length;
      // var length = this.phones.length;

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
    //
    //фильтрация массива по введенному в поле 'search' значению, НО не срабатывает потому что НЕТ встроенного метода filter в получаемом массиве объектов через API
    // filteredList() {
    //   if (!this.search) {
    //     return this.events;
    //   }
    //   return this.events.filter((match) => {
    //     return match.currentSeason.startDate.indexOf(this.search) != -1;
    //   });
    // },
    //
    //тестовый фильтр для тестового массива с использованием метода 'filter'
    // filteredList() {
    //   console.log(this.phones);
    //   return this.phones.filter((elem) => {
    //     if (this.filters.search === "") return true;
    //     else if (elem && elem.season && elem.season.startDate)
    //       return (
    //         elem.season.startDate.indexOf(this.filters.search) !== -1
    //       );
    //   });
    // },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.area-card {
  padding: 20px;
  width: 250px;
  /* cursor: pointer; */
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
