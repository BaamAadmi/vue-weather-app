<template>
  <div class="city-weather-detail">
    <span class="city-weather-detail__back" @click="goBack"> &lt; </span>

    <div v-if="city">
      <h2>Weather in {{ city.name }}, {{ city.country }}</h2>

      <div v-if="weather">
        <p>Temperature: {{ weather.main.temp }}°C</p>
        <p>Condition: {{ weather.weather[0].description }}</p>
      </div>
      <div v-else>Loading...</div>
    </div>

    <p v-else>City not found.</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../../router';
import type { City } from '../model/City';
import { useCityStore } from '../model/City';

const route = useRoute();
const cityStore = useCityStore();
const cityId = computed(() => Number(route.params.id));

const city = computed<City | undefined>(() =>
  cityStore.cities.find(c => c.id === cityId.value)
);

const weather = ref<any>(null);

onMounted(async () => {
  if (!city.value) return;

  const apiKey = 'dummy';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.value.lat}&lon=${city.value.lon}&units=metric&appid=${apiKey}`
  );

  if (response.ok) {
    weather.value = await response.json();
  } else {
    console.error('Failed to fetch weather data', response);
  }
});

const goBack = () => {
  router.push(`/`);
};
</script>

<style scoped lang="scss" src="./CityDetailStyle.scss" />
