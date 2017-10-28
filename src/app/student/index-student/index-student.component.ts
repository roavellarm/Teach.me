import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.scss']
})
export class IndexStudentComponent implements OnInit {
  title = "Lista de alunos";
  students: Student[] = [];

  constructor() { }

  ngOnInit() {
  }

}
