import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  login() {

    let tempEmail = this.user.email;
    let tempPassword = this.user.password;

    let tempUser = Object.assign({}, this.userService.getByEmail(tempEmail));

    if (tempUser.email != undefined) {
      if (tempEmail === tempUser.email && tempPassword === tempUser.password) {
        if (tempUser.email == 'admin@admin.com') {
          localStorage.setItem('userToken', 'admin');
        } else {
          tempUser.userType ? localStorage.setItem('userToken', 'student') : localStorage.setItem('userToken', 'instructor');
        }
        localStorage.setItem('currentUser', tempEmail);
              
        window.location.assign("/index");
      } else {
        alert('Senha incorreta!');
      }
    } else {
      alert('E-mail inexistente');
    }

    
  }

}
