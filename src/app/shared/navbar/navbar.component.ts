import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  currentUser: string;

  constructor() { }

  ngOnInit() {
    localStorage.setItem('currentUser', 'Ciclano');
    this.currentUser = localStorage.getItem('currentUser');  
  }

}
