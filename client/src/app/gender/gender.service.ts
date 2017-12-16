import { Injectable } from '@angular/core';
import { Gender } from './gender';

@Injectable()
export class GenderService {
  genders: Gender[] = [
    { id:0, title:"Masculino" },
    { id:1, title:"Feminino" },
    { id:2, title:"Outro" }
  ];
  autoIncrement: number = 3;

  constructor() { }

  getAll() {
    return this.genders;
  }

  get(_id: number) {
    return this.genders.find(gender => gender.id == _id);
  }

  post(gender: Gender) {
    gender.id = this.autoIncrement++;
    this.genders.push(gender);    
  }

  put(_id: number, gender: Gender) {
    let i = this.genders.indexOf(this.get(_id), 0);
    this.genders[i] = gender;
  }

  delete(gender: Gender) {
    let i = this.genders.indexOf(gender, 0);
    if (i > -1) {
      this.genders.splice(i, 1);
    }
  }

}
