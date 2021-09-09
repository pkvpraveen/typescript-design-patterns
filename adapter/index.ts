import { CalculatorAdapter } from './calculatoradapter';
import { FancyCalculator } from './fancycalculator';
import { SimpleCalculator } from './simplecalculator';

// const calculator = new SimpleCalculator();

const calculator = new CalculatorAdapter(new FancyCalculator());
//---------------------------
console.log(calculator.add(1, 2));
console.log(calculator.sub(2, 2));
