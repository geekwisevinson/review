import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../models/users.model";
import {UserService} from "../service/user.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'geekwise-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              public data: DataService) { }

  ngOnInit() {
    const formModel = new User(
      '', '', '', '', '','', '');
    this.signUpForm = this.fb.group(formModel);
  }

  public onSignUp() {
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.userService.createUser(user);
      console.log(this.data);
      this.signUpForm.reset();
    }
  }
}
