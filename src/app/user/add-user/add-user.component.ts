import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router:Router,private store:Store,private fb:FormBuilder) { }
  UserForm : FormGroup;
  formRef:any;
  ngOnInit() {
    this.UserForm = this.fb.group({
      name:[null,Validators.required],
      email: [null, [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      gender:['',Validators.required],
    });
    this.formRef={
      name:this.UserForm.get('name'),
      email:this.UserForm.get('email'),
      gender:this.UserForm.get('gender'),
    };
}
addUserInNgRXStore() {
  console.log("Adding data in the store:::");
  this.store.dispatch({
    type:'ADD_USER',
    payload : <User>  {
      id:Math.random(),
      name: this.formRef.name.value,
      email: this.formRef.email.value,
      gender: this.formRef.gender.value
    }
  });
  this.router.navigate(['/users']);
}

changeGender(e) {
  this.UserForm.setValue({gender:e.target.value});

}
}
