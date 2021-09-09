export class SimpleCalculator {
  add: (number1: number, number2: number) => number;
  sub: (number1: number, number2: number) => number;
  constructor() {
    this.add = function(value1, value2) {
      return value1 + value2;
    };
    this.sub = function(value1, value2) {
      return value1 - value2;
    };
  }
}
