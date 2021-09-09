import { Address } from './address';
import { Person } from './person';

export class PersonBuilder {
  name: string = 'Unknown';
  age: number = 0;
  street: string = 'Unknown';
  state: string = 'Unknown';
  country: string = 'Unknown';
  pin: string = 'Unknown';
  withName(name: string) {
    this.name = name;
    return this;
  }
  withAge(age: number) {
    this.age = age;
    return this;
  }
  livesInState(state: string) {
    this.state = state;
    return this;
  }
  livesInStreet(street: string) {
    this.street = street;
    return this;
  }
  livesInCountry(country: string) {
    this.country = country;
    return this;
  }
  withPinCode(pin: string) {
    this.pin = pin;
    return this;
  }
  build(): Person {
    const address = new Address({
      country: this.country,
      street: this.street,
      state: this.state,
      pin: this.pin
    });
    return new Person({
      name: this.name,
      age: this.age,
      address: address
    });
  }
}
