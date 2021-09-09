import { MilkShake } from './milkshake';
import { Drink, Factory } from './types';

export class MilkShakeMaker implements Factory {
  prepare = () => {
    return new MilkShake();
  };
}
