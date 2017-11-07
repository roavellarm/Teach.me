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
  type: boolean;

  constructor(private service: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.activatedRoute.snapshot.params['userType'];
    this.user = new User();
    
    if (this.type) {
        this.user.userType = true;
    } else {
        this.user.userType = false;
    }
    this.service.add(this.user);   
    this.router.navigate(['/user']);
  }

  // save() {
  //   if (this.type) {
  //       this.user.userType = true;
  //       this.service.add(this.user);
  //   } else {
  //       this.user.userType = false;
  //   }
  //   this.service.add(this.user);    
  //   this.router.navigate(['/user']);
  // }

}
