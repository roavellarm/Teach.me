import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { Student } from './../student';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.scss']
})
export class IndexStudentComponent implements OnInit {
  title = "Lista de alunos";
  students: Student[]=[];

  constructor(private service:StudentService) { }

  ngOnInit() {
    this.students = this.service.getAll();
  }

  delete(student:Student){
    this.service.delete(student);
  }

}
