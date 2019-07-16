import { Injectable } from '@angular/core';
import {User} from "../models/users.model";
import {DataService} from "../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public id: number = 0;

  constructor(public data: DataService) { }
  
  public signUp(user: User) {
    this.id++;
    user.id = String(this.id);
    const newUser = new User(user.username, user.firstName, user.last_name, user.email, user.password, user.id, user.zip);
    console.log(newUser);
    return this.data.users.push(newUser);
  }
  
  public deleteAccount(user: User) {
    const index = this.data.users.indexOf(user);
    return this.data.users.splice(index, 1);
  }

  public updateUser(user:User) {
    const index = this.data.users.indexOf(user);
    return this.data.users.splice(index, 1, user);
  }

  public searchForUser(userA: User): User {
    let index  = -1;
    this.data.users.forEach( (userB, indexB )=> {
      if (userA.username === userB.username || userA.id === userB.id) {
        index = indexB;
      }
    });
    return this.data.users[index];
  }
  
  
  
}
