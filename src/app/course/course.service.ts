import { Injectable } from '@angular/core';
import { Course } from "./course";

@Injectable()
export class CourseService {
 courses: Course[]=[];
 autoIncrement: number = 1;
  constructor() { }
  getAll() {
    return this.courses;
  }

  get(_id: number){
    return this.courses.find(course => course.id == _id);
  }

  add(_course: Course) {
    _course.id = this.autoIncrement++;
    this.courses.push(_course);
  }

  update(_id:number, _course:Course){
    let i = this.courses.indexOf(this.get(_id),0);
    this.courses[i] = _course;
  }

  delete(_course:Course) {
    let i = this.courses.indexOf(_course, 0);
    if(i > -1){
      this.courses.splice(i, 1);
    }
  }

}
