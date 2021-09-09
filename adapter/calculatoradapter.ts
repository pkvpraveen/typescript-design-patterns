import { FancyCalculator } from './fancycalculator';

export class CalculatorAdapter {
  fancyCalculator: FancyCalculator;
  constructor(calculator: FancyCalculator) {
    this.fancyCalculator = calculator;
  }
  add(number1: number, number2: number) {
    return this.fancyCalculator.operations(number1, number2, 'add');
  }
  sub(number1: number, number2: number) {
    return this.fancyCalculator.operations(number1, number2, 'sub');
  }
}
