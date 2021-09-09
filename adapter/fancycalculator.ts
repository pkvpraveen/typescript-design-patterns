export class FancyCalculator {
  operations: (value1: number, value2: number, operaion: string) => number;
  constructor() {
    this.operations = function(
      value1: number,
      value2: number,
      operation: string
    ) {
      switch (operation) {
        case 'add':
          return value1 + value2;
        case 'sub':
          return value1 - value2;
        default:
          return 0;
      }
    };
  }
}
