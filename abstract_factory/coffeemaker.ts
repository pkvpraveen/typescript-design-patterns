import { Coffee } from './coffee';
import { Factory } from './types';
export class CoffeeMaker implements Factory {
  prepare() {
    const coffee = new Coffee();
    return coffee;
  }
}
