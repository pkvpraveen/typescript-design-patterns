export interface IUser{
  say : ()=> void;
}
export class User implements IUser{
  name:string;
  constructor(name: string){
    this.name = name;
  }
  say () {
    console.log(`My name is ${this.name}`);
  }; 
}

export class UserDecorator implements IUser{
  user: IUser;
  tatoo: string;
  constructor(user: IUser, tatoo: string){
    this.user = user;
    this.tatoo = tatoo;
  }
  say () {
    this.user.say()
    console.log(`See my tatoo ${this.tatoo}`);
  };
  
}



