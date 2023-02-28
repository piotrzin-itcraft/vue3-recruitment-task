<template>
  <div class="user-card" :class="{ pending: isRecruitmentPending }">
    <div class="row">
      <img :src="user.avatar" class="avatar" />
      <div class="status-badge" :class="user.status">
        {{ user.status }}
      </div>
    </div>
    <div class="name">{{ user.name }}</div>
    <div class="age">{{ user.age }}</div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { User } from '../types';

// TODO: Rewrite this using a generic version of `defineProps`
defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
  isRecruitmentPending: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.user-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  min-width: 200px;
  transition: box-shadow 0.15s ease-in-out;
  cursor: pointer;
}

.user-card:hover {
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.2);
}

.user-card.pending {
  outline: 2px solid #c80322;
}

.row {
  display: flex;
  justify-content: space-between;
}

/* TODO: Explain what does this selector mean */
.row:not(:last-of-type) {
  margin-bottom: 4px;
}

.avatar {
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.name {
  font-weight: 600;
  font-size: 1.25rem;
}

.status-badge {
  /* TODO: Style this to look like a pill-shaped badge */
}
</style>
