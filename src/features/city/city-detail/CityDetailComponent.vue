<template>
  <div class="city-detail">
    <header class="city-detail__header">
      <button class="city-detail__nav-back" @click="goBack()" aria-label="Go back"> &lt; </button>
      <div class="city-detail__location">
        <h2 class="city-detail__location-name">{{ city?.name }}, {{ city?.country }}</h2>
        <p class="city-detail__location-date">{{ formattedDate }}</p>
      </div>
      <button class="city-detail__nav-refresh" aria-label="Refresh weather">X</button>
    </header>

    <section class="city-detail__current">
      <img
        class="city-detail__current-icon"
        :src="`https://openweathermap.org/img/wn/${currentIcon}@4x.png`"
        :alt="currentDesc"
      />
      <div class="city-detail__current-temp">{{ Math.round(currentTemp) }}° C</div>
      <div class="city-detail__current-desc">{{ currentDesc }}</div>
      <p class="city-detail__current-updated">Last Update {{ lastUpdated }} 
      <button class="city-detail__nav-refresh" @click="loadForecast()" aria-label="Refresh weather">⟳</button>
      </p>
    </section>

    <section class="city-detail__hourly">
      <h3 class="city-detail__section-title">Hourly Forecast</h3>
      <div class="city-detail__hourly-list">
        <div
          class="city-detail__hourly-card"
          v-for="(item, i) in forecast.list.slice(0, 4)"
          :key="i"
        >
          <img
            :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
            :alt="item.weather[0].main"
            class="city-detail__hourly-icon"
          />
          <div class="city-detail__hourly-temp">{{ Math.round(item.main.temp) }}°</div>
          <div class="city-detail__hourly-time">{{ DateUtilsService.formatTime(item.dt_txt) }}</div>
        </div>
      </div>
    </section>

    <section class="city-detail__weekly">
      <h3 class="city-detail__section-title">Weekly Forecast</h3>
      <div
        class="city-detail__weekly-card"
        v-for="(group, i) in groupedByDay"
        :key="i"
      >
        <div class="city-detail__weekly-card-left">
          <img
            class="city-detail__weekly-icon"
            :src="`https://openweathermap.org/img/wn/${group.icon}@2x.png`"
            :alt="group.desc"
          />
          <div>
            <div class="city-detail__weekly-day">{{ DateUtilsService.formatDay(group.date) }}</div>
            <div class="city-detail__weekly-desc">{{ group.desc }}</div>
          </div>
        </div>
        <div class="city-detail__weekly-card-right">
          <span class="city-detail__weekly-temp">{{ Math.round(group.temp) }}° C</span>
          <span class="city-detail__weekly-arrow">›</span>
        </div>
      </div>
    </section>
  </div>
</template>



<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { DateUtilsService } from '../../../common/services/date-utils.service';
import router from '../../../router';
import { useWeatherForecast } from '../composables/useWeatherForecast';
import { City } from '../model/city';
import { useCityStore } from '../stores/cityStore';

const route = useRoute();
const cityStore = useCityStore();
const cityId = computed(() => Number(route.params.id));
const city = computed(() =>
  cityStore.cities.find(c => c.id === cityId.value)
);
const { forecast, loadForecast } = useWeatherForecast(city.value as City);

const current = computed(() => forecast.value?.list?.[0]);

const currentTemp = computed(() =>
  current.value ? current.value.main.temp : '--'
);
const currentDesc = computed(() =>
  current.value?.weather?.[0]?.description || '--'
);
const currentIcon = computed(() =>
  current.value?.weather?.[0]?.icon || '01d'
);
const lastUpdated = computed(() =>
  new Date().toLocaleTimeString()
);
const formattedDate = computed(() =>
  new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
);


// Group by day
const groupedByDay = computed(() => {
  if (!forecast.value?.list) return [];

  const map = new Map<string, any[]>();
  forecast.value.list.forEach((entry: { dt_txt: string; }) => {
    const dateStr = entry.dt_txt.split(' ')[0];
    if (!map.has(dateStr)) map.set(dateStr, []);
    map.get(dateStr)?.push(entry);
  });

  return Array.from(map.entries()).map(([date, entries]) => {
    const avgTemp =
      entries.reduce((sum, e) => sum + e.main.temp, 0) / entries.length;

    return {
      date,
      temp: avgTemp,
      desc: entries[0].weather[0].main,
      icon: entries[0].weather[0].icon
    };
  });
});

const goBack = () => {
  router.push(`/`);
};
</script>

<style scoped lang="scss" src="./CityDetailStyle.scss" />
