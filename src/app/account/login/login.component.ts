import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let email = 'admin@admin.com'

    localStorage.setItem('currentUser', '');
    localStorage.setItem('userToken', '');
    this.router.navigate(['/index']);
  }

}
