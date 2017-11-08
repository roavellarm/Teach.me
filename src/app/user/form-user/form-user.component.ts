import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html'
})

export class FormUserComponent implements OnInit {
  user: User;
  id: number;
  error: string;
  showAlert: boolean = false;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (isNaN(this.id)){
      this.user = new User();
    } else {
      this.user = Object.assign({},
        this.userService.get(this.id)
      );
    }
  }

  save() {
    if (isNaN(this.id)) {
      if (this.emailVerify()) {
        this.userService.add(this.user);
        this.user = new User();
      } else {
        this.showAlert = true;
        this.error = "Email já cadastrado!";
      }
    } else {
      this.userService.update(this.id, this.user);
      this.router.navigate(['/user']);
      
    }

    if (this.emailVerify()) {
      this.router.navigate(['/user']);
    }
    
  }

  cancel() {
    this.router.navigate(['/user']);
  }

  emailVerify() {
    if (this.userService.getByEmail(this.user.email) == undefined && this.userService.getByEmail(this.user.email) == undefined) {
      return true;
    } else {
      return false;
    }
  }
}
