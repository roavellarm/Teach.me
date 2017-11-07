import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  currentUser: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');  
  }

  loggout() {
    localStorage.setItem('currentUser', '');
    this.router.navigate(['/index']);
  }
}
