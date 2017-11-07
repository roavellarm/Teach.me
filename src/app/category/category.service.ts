import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryService {
  categories: Category[] = [];
  autoIncrement: number = 1;

  constructor() { }

  getAll() {
    return this.categories;
  }

  get(_id: number) {
    return this.categories.find(instructor => instructor.id == _id);
  }

  post(_category: Category) {
    _category.id = this.autoIncrement++;
    this.categories.push(_category);
  }

  put(_id: number, _category: Category) {
    let i = this.categories.indexOf(this.get(_id), 0);
    this.categories[i] = _category;
  }

  delete(_category: Category) {
    let i = this.categories.indexOf(_category, 0);
    if (i > -1) {
      this.categories.splice(i, 1);
    }
  }

}
