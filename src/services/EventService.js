import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.football-data.org/v2",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Auth-Token": "ec731cb0597644fa8fec4f37b6434115",
  },
});

export default {
  getEvents() {
    return apiClient.get("/competitions/");
  },
  getTeams() {
    return apiClient.get("/teams");
  },
  getTeamCalendar(id) {
    return apiClient.get("/teams/" + id + "/matches");
  },
  getCompetitionCalendar(id) {
    return apiClient.get("/competitions/" + id + "/matches");
  },
};
