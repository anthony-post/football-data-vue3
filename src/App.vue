<template>
  <div id="nav">
    <router-link :to="{ name: 'EventList' }">Competitions (free)</router-link> |
    <router-link :to="{ name: 'TeamList' }">Teams</router-link> |
    <router-link to="/allcompetition">All Competitions</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
