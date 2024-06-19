import { faker } from '@faker-js/faker';

export type Vehicle = {
  model: string;
  type: string;
  color: string;
  fuel: string;
};

const newPerson = (): Vehicle => {
  return {
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    color: faker.vehicle.color(),
    fuel: faker.vehicle.fuel(),
  };
};

export const createData = (len: number): Vehicle[] => {
  return [...Array(len)].map(() => newPerson());
};
