import { Component, OnInit } from '@angular/core';
import { Course } from "../course";
import { CourseService } from "../course.service";
import { UserService } from "../../user/user.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-index-course',
  templateUrl: './index-course.component.html'
})
export class IndexCourseComponent implements OnInit {
  title = "Lista de Cursos";
  courses: any[] = [];
  users: any[] = [];
  currentUser: string;
  userToken: string;

  constructor(
    private courseService: CourseService, 
    private userService: UserService, 
  ) { }

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
      (courseList: Course[]) => { this.courses = courseList; 
        // alert(this.courses[1].title);
      },
      error => { console.log(error); }
    );
  }

  updateUserList() {
    this.userService.getAll().subscribe(
      userList => { this.users = userList; },
      error => { console.log(error);}
    );
  }

}
