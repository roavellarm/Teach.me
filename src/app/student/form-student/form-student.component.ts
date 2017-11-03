import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { Student } from './../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {
  student: Student;
  id: number;

  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
      this.service.add(this.student);
      this.student = new Student();
    } else {
      this.service.update(this.id, this.student);
    }
    this.router.navigate(['/student']);
  }

  cancel() {
    this.router.navigate(['/student']);
  }

}
