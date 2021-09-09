export interface Drink {
  comsume: () => void;
}
export interface Factory {
  prepare: () => Drink;
}
export type availableDrinks = 'tea' | 'coffee' | 'milkshake';
export interface AbstractFactory {
  makeDrink: () => Drink;
}
