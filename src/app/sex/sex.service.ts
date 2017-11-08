import { Injectable } from '@angular/core';
import { Sex } from './sex';

@Injectable()
export class SexService {
  sexes: Sex[] = [];
  autoIncrement: number = 1;

  constructor() { }

  getAll() {}

  get(_id: number) {}

  post(_sex: Sex) {
    _sex.id = this.autoIncrement++;
    this.sexes.push(_sex);    
  }

  put() {}

  delete() {}

}
