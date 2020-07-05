import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [UserComponent, AddUserComponent],
  imports: [
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class UserModule { }
