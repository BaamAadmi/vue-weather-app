import { reactive } from "vue";

export interface Profile {
    name: string;
    email: string;
    mobile: string;
}

export const userProfileStore = reactive({
  name: 'Sudeep Rane',
  email: 'sudeep.avon@gmail.com',
  mobile: '987654321',
});

