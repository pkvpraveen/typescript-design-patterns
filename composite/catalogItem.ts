import { Catalog } from './types';

export class CatalogItem implements Catalog {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  total = () => {
    return this.price;
  };
  print = () => {
    console.log(JSON.stringify(this));
  };
}
