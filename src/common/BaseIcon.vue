<template>
  <img
    class="base-icon"
    :src="props.src"
    :alt="props.alt"
    :width="props.size"
    :height="props.size"
    loading="lazy"
    @error="onError"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
  size?: number;
}>();

const fallback = '/assets/fallback-icon.png';

function onError(e: Event) {
  const img = e.target as HTMLImageElement;
  img.src = fallback;
}
</script>

<style scoped>
.base-icon {
  object-fit: contain;
  display: inline-block;
}
</style>
