import { Injectable } from '@angular/core';
import {User} from "../models/users.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loggedInAs = null;

  constructor(private apiService: ApiService) { }

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


}
