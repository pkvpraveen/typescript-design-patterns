import { CatalogGroup } from './cataloggroup';
import { CatalogItem } from './catalogItem';

const foodCatalog = new CatalogGroup('food', [
  new CatalogItem('Idli', 5.0),
  new CatalogItem('dosa', 7.0)
]);
const clothsCatalog = new CatalogGroup('cloths', [
  new CatalogItem('t-shirt', 300.0),
  new CatalogItem('shirt', 700.0)
]);
const car = new CatalogItem('Honda', 1000000.0);

const catalog = new CatalogGroup('catalog', [foodCatalog, clothsCatalog, car]);

console.log(catalog.total());
catalog.print();
