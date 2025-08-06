<template>
  <div class="profile-summary">
    <div class="profile-summary__avatar-box">
      <img
        src="../../../assets/images/profile.png"
        alt="User Avatar"
        class="profile-summary__avatar"
      />
    </div>
    <div v-if="userProfileStore" class="profile-summary__info">
      <div class="profile-summary__name">{{ userProfileStore.name }}</div>
      <div class="profile-summary__contact">
        <span class="profile-summary__email">{{ userProfileStore.email }}</span>
        <span class="profile-summary__separator">|</span>
        <span class="profile-summary__phone">{{ userProfileStore.mobile }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userProfileStore } from '../ProfileStore';
</script>

<style src="./ProfileSummary.scss"></style>
