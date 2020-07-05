import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) {

  }
}
export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload:number){

  }
}

export type Actions = AddUser | RemoveUser;
