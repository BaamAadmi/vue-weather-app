<template>
  <div class="forecast-item">
    <p>{{ data.time || data.date }}</p>
    <p>{{ data.temp_c || data.day?.avgtemp_c }}°C</p>
    <img :src="data.condition.icon" alt="weather icon" />
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
.forecast-item {
  padding: 0.5rem;
  background: #f0f4f8;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
