import { Component, OnInit } from '@angular/core';
import { User } from './../../user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  user: User;
  error: string;
  showAlert: boolean = false;

  constructor(private service: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User();
  }

  save() {
    if (this.emailVerify()) {
      this.service.add(this.user);
      this.user = new User();
    } else {
      this.showAlert = true;
      this.error = "Email já cadastrado!";
    }
  }

  cancel() {
    this.router.navigate(['/user']);
  }

  emailVerify() {
    if (this.service.getByEmail(this.user.email) == undefined) {
      return true;
    } else {
      return false;
    }
  }
}
