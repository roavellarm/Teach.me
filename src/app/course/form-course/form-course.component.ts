import { getTestBed } from '@angular/core/testing';
import { UserService } from './../../user/user.service';
import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from "../course";
import { CourseService } from "../course.service";
import { User } from './../../user/user';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html'
})
export class FormCourseComponent implements OnInit {
  course:Course;
  id:number;
  // user: User;
  students: User[] = [];
  instructors: User[] = [];
  categories: Category[]=[];

  currentUser: string;

  constructor(
    private service: CourseService, 
    private userService: UserService, 
    private categoryService: CategoryService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() 
  {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.categories = this.categoryService.getAll();

    this.students = this.userService.getStudents();
    this.instructors = this.userService.getInstructors();

    this.currentUser = localStorage.getItem('currentUser');

    if (isNaN(this.id)){
      this.course = new Course();
    }
    else 
    {
       this.course = Object.assign({}, this.service.get(this.id));
    }
  }

  save() 
  {
    if (isNaN(this.id)) {
      this.course.instructor = this.userService.getByEmail(this.currentUser);
      this.service.post(this.course);
      this.course = new Course();
    } 
    else
    {
      this.service.put(this.id, this.course);
    }
    this.router.navigate(['/course']);
    this.refreshUsers();
  }

  cancel() {
    this.router.navigate(['/course']);
    this.refreshUsers();
  }

  refreshUsers() {
    this.students = this.userService.getStudents();
    this.instructors = this.userService.getInstructors();
  }

}
