import { Factory } from './types';
import { Tea } from './tea';

export class TeaMaker implements Factory {
  prepare() {
    const tea = new Tea();
    return tea;
  }
}
