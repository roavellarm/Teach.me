import { CategoryService } from './../category/category.service';
import { Category } from './../category/category';
import { Injectable } from '@angular/core';
import { Course } from "./course";
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Injectable()
export class CourseService {
  courses: Course[] = [];
  students: User[] = [];
  instructors: User[] = [];
  categories: Category[] = [];

  autoIncrement: number = 1;

  constructor(private userService: UserService, private categoryService: CategoryService) { 
    this.instructors = userService.getInstructors();
    this.students = userService.getStudents();
    this.categories = categoryService.getAll();
  }

  getAll() {
    return this.courses;
  }

  get(_id: number) {
    return this.courses.find(course => course.id == _id);
  }

  add(_course: Course) {
    _course.id = this.autoIncrement++;
    this.courses.push(_course);
  }

  update(_id: number, _course: Course) {
    let i = this.courses.indexOf(this.get(_id), 0);
    this.courses[i] = _course;
  }

  delete(_course: Course) {
    let i = this.courses.indexOf(_course, 0);
    if (i > -1) {
      this.courses.splice(i, 1);
    }
  }

}
