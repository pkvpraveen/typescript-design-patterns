import { Drink } from './types';

export class MilkShake implements Drink {
  comsume = () => {
    console.log('drinking milk shake');
  };
}
