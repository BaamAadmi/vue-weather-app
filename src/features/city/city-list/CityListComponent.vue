<template>
  <div class="city-list">
    <div class="city-list_header">
        <h2>Weather</h2> 
        <div @click="gotToProfile()" class="city-list_profile"></div> 
    </div>
    <div class="city-list_body">
      <div
        v-for="city in cityStore.cities"
        :key="city.id"
        class="city-card"
        @click="goToDetail(city.id)"
      >
        {{ city.name }}
      </div>
    </div>
 </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useCityStore } from '../model/City';

const cityStore = useCityStore();
const router = useRouter()

const goToDetail = (cityId: number) => {
  router.push(`/city/${cityId}`)
}

const gotToProfile = ()=> {
   router.push(`/profile`);
}

</script>

<style scoped lang="scss" src="./CityListStyle.scss" />
