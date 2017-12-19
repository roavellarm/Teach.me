import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';
import { ActivatedRoute, Router } from '@angular/router';
import { GenderService } from "../../gender/gender.service";
import { Gender } from "../../gender/gender";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html'
})

export class FormUserComponent implements OnInit {
  user: User;
  _id: any;
  error: string;
  showAlert: boolean = false;
  genders: Gender[]=[];
  
  constructor(
    private userService: UserService, 
    private genderService: GenderService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['id'];
    this.genderService.getAll().subscribe(
      genderList => { this.genders = genderList; }
    );
    
    if (this._id == "new"){
      this.user = new User();
    } else {
      this.userService.get(this._id).subscribe(
        (user: User) => { this.user = user; }
        // (user: User) => { this.user = Object.assign({}, user); }
      );
    }
  }

  save() {
    if (this._id == "new") {
      // if (this.emailVerify()) {
        this.userService.post(this.user).subscribe(
          (user: User) => {
            this.user = new User();
            this.router.navigate(['/user']);
          }
        );
      // } else {
      //   this.showAlert = true;
      //   this.error = "Email já cadastrado!";
      // }
    } else {
      this.userService.put(this.user).subscribe(
        (user: User) => {
          this.router.navigate(['/user']); 
        }
      ); 
    }
    // if (this.emailVerify()) {
    //   this.router.navigate(['/user']);
    // } 
  }

  cancel() {
    this.router.navigate(['/user']);
  }

  // private emailVerify() {
  //   if (this.userService.getByEmail(this.user.email) == undefined && this.userService.getByEmail(this.user.email) == undefined) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
