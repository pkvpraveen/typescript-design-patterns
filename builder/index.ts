import { Address } from './address';
import { Person } from './person';
import { PersonBuilder } from './personbuilder';

const person = new PersonBuilder()
  .withName('Pkv')
  .withAge(34)
  .livesInStreet('street one')
  .livesInState('Kerala')
  .livesInCountry('India')
  .withPinCode('so24mepn')
  .build();
console.log(person);
//Lot of work, not required in js, we can just use parameterized constructor;
const address = new Address({
  country: 'India',
  state: 'Kerala',
  street: 'SomeStreet',
  pin: 'mypin'
});
const simplePerson = new Person({ name: 'Pkv', age: 34, address: address });
console.log(simplePerson);
