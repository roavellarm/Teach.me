import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { Student } from './../student';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../../instructor/instructor.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {
  student: Student;
  id: number;

  error: string;
  showAlert: boolean = false;

  constructor(private service: StudentService, private instructorService: InstructorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (isNaN(this.id)){
      this.student = new Student();
    } else {
      this.student = Object.assign({},
        this.service.get(this.id)
      );
    }
  }

  save() {
    if (isNaN(this.id)) {
      if (this.emailVerify()) {
        this.service.add(this.student);
        this.student = new Student();
      } else {
        this.showAlert = true;
        this.error = "Email já cadastrado!";
      }
    } else {
      this.service.update(this.id, this.student);
    }

    if (this.emailVerify()) {
      this.router.navigate(['/student']);
    }
    
  }

  cancel() {
    this.router.navigate(['/student']);
  }

  emailVerify() {
    if (this.service.getByEmail(this.student.email) == undefined && this.instructorService.getByEmail(this.student.email) == undefined) {
      return true;
    } else {
      return false;
    }
  }

}
