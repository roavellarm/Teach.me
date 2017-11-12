import { Injectable } from '@angular/core';
import { Sex } from './sex';

@Injectable()
export class SexService {
  sexes: Sex[] = [
    { id:0, title:"Masculino" },
    { id:1, title:"Feminino" },
    { id:2, title:"Outro" }
  ];
  autoIncrement: number = 3;

  constructor() { }

  getAll() {
    return this.sexes;
  }

  get(_id: number) {
    return this.sexes.find(sex => sex.id == _id);
  }

  post(_sex: Sex) {
    _sex.id = this.autoIncrement++;
    this.sexes.push(_sex);    
  }

  put(_id: number, _sex: Sex) {
    let i = this.sexes.indexOf(this.get(_id), 0);
    this.sexes[i] = _sex;
  }

  delete(_sex: Sex) {
    let i = this.sexes.indexOf(_sex, 0);
    if (i > -1) {
      this.sexes.splice(i, 1);
    }
  }

}
