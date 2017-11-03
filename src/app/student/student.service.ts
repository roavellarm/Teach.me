import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {
  students:Student[]=[
    { id:1, firstName:"Ciclano", lastName:"Araujo", birthDate:new Date(1969,12,24), phone:"(51) 99567-4545", email:"ciclano@email.com",
      password:"secret", adress:"Além from hell" },
    { id:2, firstName:"Beltrano", lastName:"Da Silva", birthDate:new Date(1965,9,15), phone:"(51) 99977-7666", email:"beltrano@email.com",
      password:"secret", adress:"Onde o diabo perdeu as botas" },
    { id:3, firstName:"Fulano", lastName:"M", birthDate:new Date(1984,5,30), phone:"(55) 98234-6384", email:"fulano@email.com",
      password:"secret", adress:"Ohio que o parta" }
  ];
  autoIncrement: number = 4;
  
  constructor() { }

  getAll() {
    return this.students;
  }

  get(_id: number){
    return this.students.find(student => student.id == _id);
  }

  add(_student: Student) {
    _student.id = this.autoIncrement++;
    this.students.push(_student);
  }

  update(_id:number, _student:Student){
    let i = this.students.indexOf(this.get(_id),0);
    this.students[i] = _student;
  }

  delete(_student:Student) {
    let i = this.students.indexOf(_student, 0);
    if(i > -1){
      this.students.splice(i, 1);
    }
  }
}
