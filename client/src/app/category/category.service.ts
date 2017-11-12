import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryService {
  categories: Category[] = [
    { id:0, title:"Reforço Escolar" },
    { id:1, title:"Idioma" },
    { id:2, title:"Música" },
    { id:3, title:"Esportes" },
    { id:4, title:"Artes e Lazer" },
  ];
  autoIncrement: number = 5;

  constructor() { }

  getAll() {
    return this.categories;
  }

  get(_id: number) {
    return this.categories.find(category => category.id == _id);
  }

  add(_category: Category) {
    _category.id = this.autoIncrement++;
    this.categories.push(_category);
  }

  update(_id: number, _category: Category) {
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
