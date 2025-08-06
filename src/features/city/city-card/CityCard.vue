<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { DateUtilsService } from '../../../common/services/date-utils.service';
import { useWeatherBasic } from '../composables/useWeatherBasic';
import { City } from '../model/city';

const props = defineProps<{
  city: City
}>()
const { weather, loading } = useWeatherBasic(props.city);
const router = useRouter()

const isDaytime = computed(() => {
  if (!weather.value || !weather.value.sys) return true; // default to day
  return (
    weather.value.dt >= weather.value.sys.sunrise &&
    weather.value.dt < weather.value.sys.sunset
  );
});

onMounted(()=> {
  console.log(weather);
})


const openDetails = () => {
  router.push(`/city/${props.city.id}`);
}
</script>

<template>
  <div @click="openDetails" :class="['city-card', { 'city-card--night': !isDaytime }]" aria-label="Weather Information">
    <div class="city-card__top">
      <div class="city-card__location">
        <div class="city-card__location-name">{{ city.name }}</div>
        <p v-if="weather && weather.dt" class="city-card__location-time">
          {{ DateUtilsService.localTimeFromTimestamp(weather.dt) }}
        </p>
      </div>
      <div v-if="weather" class="city-card__temperature" aria-label="Current Temperature">
        <span class="city-card__temperature-value">{{ weather.main.temp }}°C</span>
      </div>
    </div>

    <div class="city-card__bottom">
      <p v-if="weather && weather.weather" class="city-card__condition" aria-label="Weather Condition">
        {{ weather.weather[0].main }} - {{ weather.weather[0].description }}
      </p>

      <div v-if="weather && weather.main" class="city-card__high-low" aria-label="Temperature Range">
        <span class="city-card__high-temp">{{ weather.main.temp_min }}°C</span>
        <span class="city-card__low-temp">{{ weather.main.temp_max }}°C</span>
      </div>
    </div>
  </div>
</template>



<style lang="scss" src="./CityCard.scss"></style>
