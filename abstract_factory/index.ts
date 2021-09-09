import { DrinkFactory } from './factory';
import { availableDrinks } from './types';

// Validation omitted
const choice = process.argv[2] as availableDrinks;
const drinkFactory = new DrinkFactory(choice);
const drink = drinkFactory.makeDrink();
drink.comsume();
