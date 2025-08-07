<template>
  <div class="city-list">
    <div class="city-list_header">
      <h2>Weather</h2>
      <div @click="goToProfile()" class="city-list_profile"></div>
    </div>
    <div class="city-list_search">
      <i class="city-list_search__icon"></i>
      <input
        id="input-city-filter"
        v-model="searchString"
        type="text"
        class="city-list_search__input"
        placeholder="Search your City"
      />
    </div>
    <div class="city-list_body">
      <CityCard
        v-for="city in filteredCities"
        :key="city.name"
        :city="city"
        @click="selectCity(city.name)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import CityCard from '../city-card/CityCard.vue';
import { useCityStore } from '../stores/cityStore';

const selectedCity = ref<string | null>(null);
const cityStore = useCityStore();
const router = useRouter();
const searchString = ref<string>('');

const filteredCities = computed(() => {
  const query = searchString.value.toLowerCase().trim();
  if (!query) return cityStore.cities;
  return cityStore.cities.filter((city) => city.name.toLowerCase().includes(query));
});

const selectCity = (name: string) => {
  selectedCity.value = name;
};

const goToProfile = () => {
  router.push(`/profile`);
};
</script>

<style scoped lang="scss" src="./CityListStyle.scss" />
