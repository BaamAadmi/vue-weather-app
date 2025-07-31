<template>
  <div class="city-list">
    <div
      v-for="city in cityStore.cities"
      :key="city.id"
      class="city-item"
      @click="$emit('select', city.id)"
    >
      {{ city.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCityStore } from '../model/city';


const cityStore = useCityStore();

</script>