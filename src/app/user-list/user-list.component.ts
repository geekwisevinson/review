import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {User} from "../models/users.model";
import {UserService} from "../service/user.service";

@Component({
  selector: 'geekwise-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public data: DataService, private userService: UserService) { }

  ngOnInit() {
  }

  public onLogin(user: User) {
    this.userService.loginUser(user);
  }

}
