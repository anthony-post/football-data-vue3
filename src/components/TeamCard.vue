<template>
  <router-link
    class="team-link"
    :to="{ name: 'TeamDetails', params: { id: team.id } }"
  >
    <div class="team-card">
      <div>{{ team.name }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.team-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.team-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.team-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
