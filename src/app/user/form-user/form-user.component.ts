import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../../instructor/instructor.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  user: User;
  id: number;

  error: string;
  showAlert: boolean = false;
  constructor(private service: UserService, private instructorService: InstructorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (isNaN(this.id)){
      this.user = new User();
    } else {
      this.user = Object.assign({},
        this.service.get(this.id)
      );
    }
  }

  save() {
    if (isNaN(this.id)) {
      if (this.emailVerify()) {
        this.service.add(this.user);
        this.user = new User();
      } else {
        this.showAlert = true;
        this.error = "Email já cadastrado!";
      }
    } else {
      this.service.update(this.id, this.user);
    }

    if (this.emailVerify()) {
      this.router.navigate(['/user']);
    }
    
  }

  cancel() {
    this.router.navigate(['/user']);
  }

  emailVerify() {
    if (this.service.getByEmail(this.user.email) == undefined && this.instructorService.getByEmail(this.user.email) == undefined) {
      return true;
    } else {
      return false;
    }
  }
}
