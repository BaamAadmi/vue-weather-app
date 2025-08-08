<template>
  <div class="header">
    <div v-if="$slots.left" class="icon left" @click="emit('left-icon-click')">
      <slot name="left" />
    </div>

    <h2 :class="titleClass">{{ props.title }}</h2>

    <div v-if="$slots.right" class="icon right" @click="emit('right-icon-click')">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  titleClass?: string;
}>();

const emit = defineEmits<{
  (e: 'left-icon-click'): void;
  (e: 'right-icon-click'): void;
}>();
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  width: 100%;
  gap: 8px;
}

h2 {
  font-weight: 700;
  font-size: 37px;
  line-height: 100%;
  margin: 0;
  flex-grow: 1;
  text-align: center;
}

.icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.left {
  order: -1;
}

.right {
  order: 1;
}
</style>
