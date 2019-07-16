import { Injectable } from '@angular/core';
import {User} from "../models/users.model";
import {DataService} from "../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public data: DataService) { }
  
  public signUp(user: User) {
    return this.data.users.push(user);
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
