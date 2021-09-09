import { TeaMaker } from './teamaker';
import { MilkShakeMaker } from './milkshakemaker';
import { AbstractFactory, availableDrinks, Factory } from './types';
import { CoffeeMaker } from './coffeemaker';

const maker: { [key in availableDrinks]: Factory } = {
  tea: new TeaMaker(),
  coffee: new CoffeeMaker(),
  milkshake: new MilkShakeMaker()
};
export class DrinkFactory implements AbstractFactory {
  factory: Factory;
  constructor(type: availableDrinks) {
    this.factory = maker[type];
  }
  makeDrink = () => {
    return this.factory.prepare();
  };
}
