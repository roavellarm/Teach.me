import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor.service'
import { Instructor } from '../instructor';

import { StudentService } from '../../student/student.service';

@Component({
  selector: 'app-form-instructor',
  templateUrl: './form-instructor.component.html'
})
export class FormInstructorComponent implements OnInit {
  instructor: Instructor;
  id: number;

  error: string;
  showAlert: boolean = false;

  constructor(private service: InstructorService, private studentService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (isNaN(this.id)) {
      this.instructor = new Instructor();
    } else {
      this.instructor = Object.assign({},
        this.service.get(this.id)
      );
    }
  }

  save() {  
    if (isNaN(this.id)) {
      if (this.emailVerify()) {
        this.service.post(this.instructor);
        this.instructor = new Instructor();
      } else {
        this.showAlert = true;
        this.error = "E-mail já cadastrado!";
      }   
    } else {
      this.service.put(this.id, this.instructor);
    }

    if (this.emailVerify()) {
       this.router.navigate(['/instructor']);
    }
  }
  
  cancel() { 
    this.router.navigate(['/instructor']);
  }

  emailVerify() {
    if (this.service.getByEmail(this.instructor.email) == undefined && this.studentService.getByEmail(this.instructor.email) == undefined) {
      return true;
    } else {
      return false;
    }
  }

}
