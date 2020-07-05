import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to ng10-jasmine-kerma-test';
  name = 'sumit';
  a:boolean=true;
  constructor(private router:Router) {

  }

  goToUser() {
    this.router.navigate(['/users']);
  }
}
