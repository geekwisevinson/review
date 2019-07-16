import { Injectable } from '@angular/core';
import { User } from '../models/users.model'
import {Message} from "../models/message.model";
import { Post } from  "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users: User[] = [];
  public messages: Message[] = [];
  public posts: Post[] = [];
  constructor() { }

  public getUserById(id) {
    let user = null;
    this.users.forEach( item => {
      if (item.id === id) {
        user = item;
      }
    })
    return user;
  }

}
