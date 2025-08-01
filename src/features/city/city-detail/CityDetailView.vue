<template>
  <div class="city-detail-view">
  <span class="city-detail-view-back" @click="goBack"> < </span> 
  <CityDetailComponent v-if="city" :city="city" />
  <p v-else>City not found.</p>

  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../../router';
import { useCityStore } from '../model/City';
import CityDetailComponent from './CityDetailComponent.vue';

const route = useRoute()
const cityStore = useCityStore();
const cityId = computed(() => Number(route.params.id));

// Find the city by ID
const city = computed(() =>
  cityStore.cities.find(c => c.id === cityId.value)
);

const goBack = () => {
    router.push(`/`);
}
</script>

<style scoped lang="scss" src="./CityDetailStyle.scss" />