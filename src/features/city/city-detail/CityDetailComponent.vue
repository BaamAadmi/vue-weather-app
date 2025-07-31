<template>
  <div class="city-detail">
    <h2>Weather in {{ city.name, city.country }}</h2>
    <div v-if="weather">
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Condition: {{ weather.weather[0].description }}</p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue';
import { City } from '../model/city';


const props = defineProps<{ city: City }>()
const weather = ref<any>(null)

onMounted(async () => {
  const apiKey = 'dummy API key'; // TODO: Protect this API key
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${props.city.lat}&lon=${props.city.lon}&units=metric&appid=${apiKey}`
  )
  if (response.ok) {
    weather.value = await response.json()
  } else {
    console.error('Failed to fetch weather data', response)
  }
})
</script>
