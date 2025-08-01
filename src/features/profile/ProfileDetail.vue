<template>
  <div class="profile-detail">
    <ProfileSummary />
    <ProfileForm />
  </div>
</template>

<script setup lang="ts">
import ProfileForm from './profile-form/ProfileForm.vue';
import ProfileSummary from './profile-summary/ProfileSummary.vue';

</script>

<style scoped>
.profile-detail {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
