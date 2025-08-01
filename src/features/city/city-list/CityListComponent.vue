<template>
  <div class="city-list-view">
    <div class="city-list">
      <div
        v-for="city in cityStore.cities"
        :key="city.id"
        class="city-item"
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

function goToDetail(city: number) {
  router.push(`/city/${city}`)
}
</script>

<style scoped lang="scss" src="./CityListStyle.scss" />
