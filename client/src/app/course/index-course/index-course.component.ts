import { Component, OnInit } from '@angular/core';
import { Course } from "../course";
import { CourseService } from "../course.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-index-course',
  templateUrl: './index-course.component.html'
})
export class IndexCourseComponent implements OnInit {
  title = "Lista de Cursos";
  courses: Course[] = [];
  currentUser: string;
  userToken: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.updateCoursesList();
    this.currentUser = localStorage.getItem('currentUser');
    this.userToken = localStorage.getItem('userToken');
  }

  delete(course: Course) {
    this.courseService.delete(course).subscribe(
      (cours: Course) => { this.updateCoursesList(); }
    );
  }

  updateCoursesList() {
    this.courseService.getAll().subscribe(
      (courseList: Course[]) => { this.courses = courseList; },
      error => { console.log(error); }
    );
  }
}
