import { faker } from '@faker-js/faker';
import { User } from '../types';

const futureRecruitment = {
  date: faker.date.future(),
  status: 'pending',
};

const pastRecruitment = {
  date: faker.date.past(),
  status: 'finished',
};

export const MOCK_USERS: User[] = Array.from({ length: 10 }, () => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  avatar: faker.image.avatar(),
  status: Math.random() > 0.5 ? 'active' : 'offline',
  age: faker.random.numeric(2),
  recruitments: [
    pastRecruitment,
    Math.random() > 0.8 ? futureRecruitment : pastRecruitment,
  ],
}));
