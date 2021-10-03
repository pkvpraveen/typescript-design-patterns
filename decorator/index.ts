import {User, UserDecorator} from './user';


const user = new User('John');
const decoratedUser = new UserDecorator(user, '$(-)$');

user.say();
decoratedUser.say();