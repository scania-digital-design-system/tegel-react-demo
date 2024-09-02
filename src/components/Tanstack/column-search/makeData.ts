import { faker } from '@faker-js/faker';

export type Person = {
  name: string;
  truckModel: string;
  state: string;
  mileage: number;
};

const newPerson = (): Person => {
  return {
    name: faker.person.fullName(),
    truckModel: faker.vehicle.model(),
    state: faker.address.state(),
    mileage: faker.number.int({ min: 0, max: 200000 }),
  };
};

export const createData = (len: number): Person[] => {
  return [...Array(len)].map(() => newPerson());
};
