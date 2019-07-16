import { Component } from '@angular/core';
import {UserService} from "./service/user.service";

@Component({
  selector: 'geekwise-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'review';
  constructor( public userService: UserService) {}
}
