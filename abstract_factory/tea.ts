import { Drink } from './types';

export class Tea implements Drink {
  comsume = () => {
    console.log('drinking tea');
  };
}
