<template>
  <main class="container">
    <ul class="users-list">
      <li class="user-item" v-for="user of users">
        <!-- TODO: Explain why the :isRecruitmentPending assignment is not optimal & rewrite it in a better way  -->
        <UserCard
          :user="user"
          :isRecruitmentPending="userHasRecruitmentPending(user)"
        />
      </li>
    </ul>
    <div class="age-stats">Average age of candidates: {{ averageAge }}</div>
  </main>
</template>
<script setup lang="ts">
import { UserCard } from '@/components';
import { User } from './types';
import { MOCK_USERS } from './mocks';

const users = MOCK_USERS;

// TODO: Rewrite this function's body to be functional
const userHasRecruitmentPending = (user: User) => {
  let result = false;

  for (const recruitment of user.recruitments) {
    if (recruitment.status === 'pending') {
      result = true;
      break;
    }
  }

  return result;
};

// TODO: Write a method to calculate the average age of all candidates
const averageAge = NaN;
</script>

<style scoped>
.container {
  margin: 32px;
}

.users-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
}

.users-list > li.user-item {
  flex: 1;
}

.age-stats {
  margin-top: 8px;
}
</style>
