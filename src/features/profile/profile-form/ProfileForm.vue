<template>
  <div class="profile-form">
    <form v-if="formDetailStore && userProfileStore" class="profile-form__form" @submit.prevent>
      <div
        class="profile-form__group"
        v-for="field in formDetailStore.fields"
        :key="field.model"
      >
        <label :for="field.model" class="profile-form__label">
          {{ field.label }}
        </label>
        <input
          :id="field.model"
          v-model="formDetailStore.form[field.model]"
          :type="field.type"
          :disabled="!formDetailStore.isEditing"
          class="profile-form__input"
          placeholder=" "
        />
      </div>
    </form>
    <div class="profile-form__button">
      <button  @click="submit">
      {{ formDetailStore.isEditing ? 'Save' : 'Edit' }}
    </button>
   </div>
    
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { userProfileStore } from '../ProfileStore';

 const formDetailStore = reactive({
      isEditing: false,
      form: <Record<string, string>>({
        name: userProfileStore.name,
        email: userProfileStore.email,
        mobile: userProfileStore.mobile,
      }),
      fields: [
        { label: 'Full Name', model: 'name', type: 'text' },
        { label: 'Email', model: 'email', type: 'email' },
        { label: 'Mobile Number', model: 'mobile', type: 'tel' },
      ],
    
  });
 
  const submit = ()=> {
    if(formDetailStore.isEditing) {
        updateProfile();
    }
    formDetailStore.isEditing = !formDetailStore.isEditing;
  }

  const updateProfile = () => {
    userProfileStore.email = formDetailStore.form.email;
    userProfileStore.mobile = formDetailStore.form.mobile;
    userProfileStore.name = formDetailStore.form.name;
  }


  
</script>

<style lang="scss" src="./ProfileForm.scss"></style>
