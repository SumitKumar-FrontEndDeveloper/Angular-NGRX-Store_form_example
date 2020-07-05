import { AppState } from './../app.state';
import { User } from './../models/user.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable,of } from "RxJS";
import * as UserActions from '../actions/user.action'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersData:Observable<User[]>;
  constructor(private store:Store<AppState>,private router:Router) {
    this.usersData = this.store.select('users');
    console.log("User data::");
    this.usersData.subscribe(res => {
      console.log(res)
    })
   }

  ngOnInit() {
  }
  addUser() {
      this.router.navigate(['users/adduser']);
  }
  deleteUser(index) {
      this.store.dispatch(new UserActions.RemoveUser(index));
  }


}
