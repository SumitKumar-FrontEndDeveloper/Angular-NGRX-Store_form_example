import { Action } from '@ngrx/store';
import { User } from './../models/user.model';
import * as UserActions from '../actions/user.action'
const initialState : User = {
  "id": 1,
  "name": "sumit",
  "email": "as@gmail.com",
  "gender": "male"
};
export function  userReducers(state: User[] =[initialState], action: UserActions.Actions )  {
    switch(action.type){
      case  UserActions.ADD_USER:
          return [...state , action.payload];
      case UserActions.REMOVE_USER:
            return [...state.slice(0, action.payload),...state.slice(action.payload + 1)]
      default:
          return state;
    }
}


// case UserActions.REMOVE_USER:
//         return state.filter(user => user.id!== action.payload.id)
