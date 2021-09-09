import { Catalog } from './types';

export class CatalogGroup implements Catalog {
  name: string;
  catalogs: Array<Catalog>;
  constructor(name: string, catalogs: Array<Catalog>) {
    this.name = name;
    this.catalogs = catalogs;
  }
  total = () => {
    return this.catalogs.reduce((sum, nextValue) => sum + nextValue.total(), 0);
  };
  print = () => {
    console.log(this.name.toUpperCase());
    this.catalogs.forEach(catalog => catalog.print());
    console.log('---------------------------------------');
  };
}
