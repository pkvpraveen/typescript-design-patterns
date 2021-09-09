import { Drink } from './types';

export class Coffee implements Drink {
  comsume = () => {
    console.log('drinking coffee');
  };
}
