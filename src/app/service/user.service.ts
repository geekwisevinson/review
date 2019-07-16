import { Injectable } from '@angular/core';
import {User} from "../models/users.model";
import {ApiService} from "./api.service";
import {DataService} from "../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loggedInAs: User = null;

  constructor(private apiService: ApiService, public data: DataService) { }

  public createUser(user: User) {
    this.apiService.signUp(user);
  }
  public updateUser(user: User) {

  }
  public deleteUser(user: User) {

  }

  public findUser(user: User) {

  }

  public loginUser(user: User) {
    this.loggedInAs = user;
  }

  public friendRequest(user: User) {
    console.log(this.loggedInAs, user);
    this.loggedInAs.friendIds.push(user.id);
    user.friendIds.push(this.loggedInAs.id);
  }


}
