export class Address {
  street: string;
  state: string;
  country: string;
  pin: string;
  constructor({ street, state, country, pin }: Address) {
    this.country = country;
    this.pin = pin;
    this.state = state;
    this.street = street;
  }
}
