import { Injectable } from '@angular/core';
import { Instructor } from './instructor'

@Injectable()
export class InstructorService {
  instructors: Instructor[] = [];
  autoIncrement: number = 0;

  constructor() { }

  getAll() {
    return this.instructors;
  }

  get(_id: number) {
    return this.instructors.find(instructor => instructor.id == _id);
  }

  post(_instructor: Instructor) {
    _instructor.id = this.autoIncrement++;
    this.instructors.push(_instructor);
  }

  put(_id: number, _instructor: Instructor) {
    let i = this.instructors.indexOf(this.get(_id), 0);
    this.instructors[i] = _instructor;
  }

  delete(_instructor: Instructor) {
    let i = this.instructors.indexOf(_instructor, 0);
    if (i > -1) {
      this.instructors.splice(i, 1);
    }
  }

}
