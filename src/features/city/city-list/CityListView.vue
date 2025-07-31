<template>
  <div class="city-list-view">
    <CityListComponent @select="goToDetail" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import CityListComponent from './CityListComponent.vue'

const router = useRouter()

function goToDetail(city: string) {
  router.push(`/city/${city}`)
}
</script>

<style scoped lang="scss" src="./CityListStyle.scss" />
