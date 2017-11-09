import { User } from './../user/user';
import { Injectable } from '@angular/core';
import { Course } from "./course";
import { CategoryService } from './../category/category.service';
import { UserService } from '../user/user.service';
import { Category } from './../category/category';
// import { User } from '../user/user';

@Injectable()
export class CourseService {
  // student1: User;
  // student2: User;
  // instructor1: User;
  // instructor2: User;
  // category1: Category;
  // category2: Category; 
  // courses: Course[] = [
  //   { id: 0,
  //     title: "Aulas de Inglês",
  //     // instructor_id: 2,
  //     // student_id: 5,
  //     // category_id: 1,
  //     instructor: this.instructor1,
  //     student:  this.student1,
  //     category: this.category1,
  //     contact: "meuemail@email.com",
  //     description: "Aulas de Inglês Particular",
  //     module: true, // true = presencial / false = distancia
  //     price: 60.50
  //   },
  //   { id: 1,
  //     title: "Aulas de Violão",
  //     // instructor_id: 4,
  //     // student_id: 3,
  //     // category_id: 2,
  //     instructor: this.instructor2,
  //     student: this.student2,
  //     category: this.category2,
  //     contact: "por email",
  //     description: "Aulas de violão para iniciantes",
  //     module: true, // true = presencial / false = distancia
  //     price: 75.00
  //   }
  // ];
  // // students: User[] = []; NAO APAGAR!!!!!!!!!
  // // instructors: User[] = [];
  // // categories: Category[] = [];
  courses: Course[] = [];
  autoIncrement: number = 1;

  constructor(private userService: UserService, private categoryService: CategoryService) { 
    // this.instructor1 = userService.get(2); 
    // this.instructor2 = userService.get(4); 
    // this.student1 = userService.get(5); 
    // this.student2 = userService.get(3); 
    // this.category1 = categoryService.get(1);
    // this.category2 = categoryService.get(2);
  }

  getAll() {
    return this.courses;
  }

  get(_id: number) {
    return this.courses.find(course => course.id == _id);
  }

  post(_course: Course) {
    _course.id = this.autoIncrement++;
    this.courses.push(_course);
  }

  put(_id: number, _course: Course) {
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
