import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/users.model";
import {DataService} from "../services/data.service";

@Component({
  selector: 'geekwise-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
  @Input() public loggedInUser: User = null;

  constructor(public data: DataService) { }

  ngOnInit() {
  }

  public getUserById(id) {
    this.data.getUserById(id)
  }

}
