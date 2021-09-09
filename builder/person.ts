import { Address } from './address';

export class Person {
  name: string;
  age: number;
  address: Address;
  constructor({ name, age, address }: Person) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  toString() {
    JSON.stringify(this);
  }
}
