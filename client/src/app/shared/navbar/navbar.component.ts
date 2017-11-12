import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  currentUser: string;
  userToken: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');  
    this.userToken = localStorage.getItem('userToken');
  }

  loggout() {
    localStorage.setItem('currentUser', '');
    localStorage.setItem('userToken', '');
    this.router.navigate(['/index']);
  }
}
