import { faker } from '@faker-js/faker';

export type Person = {
  name: string;
  gender: string;
  jobTitle: string;
  zodiacSign: string;
};

const newPerson = (): Person => {
  return {
    name: faker.person.fullName(),
    gender: faker.person.gender(),
    jobTitle: faker.person.jobTitle(),
    zodiacSign: faker.person.zodiacSign(),
  };
};

export const createData = (len: number): Person[] => {
  return [...Array(len)].map(() => newPerson());
};
