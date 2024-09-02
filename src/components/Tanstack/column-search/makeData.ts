import { faker } from '@faker-js/faker';

export type Vehicle = {
  name: string;
  truckModel: string;
  state: string;
  mileage: string;
};

const newVehicle = (): Vehicle => {
  return {
    name: faker.person.fullName(),
    truckModel: faker.vehicle.model(),
    state: faker.location.state(),
    mileage: faker.number.int({ min: 0, max: 200000 }).toString(),
  };
};

export const createData = (len: number): Vehicle[] => {
  return [...Array(len)].map(() => newVehicle());
};
