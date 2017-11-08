import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  users:User[]=[
    { id:1, firstName:"admin@admin", lastName:"admin", birthDate:new Date(1969,12,24), phone:"(51) 000000", email:"admin@admin.com",
    password:"secret", adress:"Além from hell", userType:false },
    { id:2, firstName:"Ciclano", lastName:"Araujo", birthDate:new Date(1969,12,24), phone:"(51) 99567-4545", email:"ciclano@email.com",
      password:"secret", adress:"Além from hell", userType:false },
    { id:3, firstName:"Beltrano", lastName:"Da Silva", birthDate:new Date(1965,9,15), phone:"(51) 99977-7666", email:"beltrano@email.com",
      password:"secret", adress:"Onde o diabo perdeu as botas", userType:true },
    { id:4, firstName:"Fulano", lastName:"M", birthDate:new Date(1984,5,30), phone:"(55) 98234-6384", email:"fulano@email.com",
      password:"secret", adress:"Ohio que o parta", userType:false }
  ];
  // instructors:User[]=[];
  // students:User[]=[];
  // user:User;
  autoIncrement: number = 5;
  // instructorAutoIncrement: number = 1;
  // studentAutoIncrement: number = 1;

  constructor() { }

  // refreshUsersTypes() {
  //   this.instructors = [];
  //   this.students = [];
  //   this.instructorAutoIncrement = 1;
  //   this.studentAutoIncrement = 1;
  //   for (let _user of this.users) {
  //     this.user = new User();
  //     if(_user.userType){
  //       this.user = _user;
  //       this.user.id = this.studentAutoIncrement++;
  //       this.students.push(this.user);
  //     } else {
  //       this.user.id = this.instructorAutoIncrement++;        
  //       this.instructors.push(_user);
  //     }
  //   }
  // }

  getStudents(){
    return this.getAll().filter(user => user.userType == true);
  }

  getInstructors(){
    // this.refreshUsersTypes();
    // return this.instructors;
    return this.getAll().filter(user => user.userType == false);    
  }

  getAll() {
    return this.users;
  }

  get(_id: number){
    return this.users.find(user => user.id == _id);
  }

  getByEmail(_email: string) {
    return this.users.find(user => user.email == _email);
  }

  add(_user: User) {
    _user.id = this.autoIncrement++;
    this.users.push(_user);
    // this.refreshUsersTypes();    
  }

  update(_id:number, _user:User){
    let i = this.users.indexOf(this.get(_id),0);
    this.users[i] = _user;
    // this.refreshUsersTypes();    
  }

  delete(_user:User) {
    let i = this.users.indexOf(_user, 0);
    if(i > -1){
      this.users.splice(i, 1);
    }
    // this.refreshUsersTypes();    
  }
}
