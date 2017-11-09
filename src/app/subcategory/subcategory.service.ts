import { Injectable } from '@angular/core';
import { Subcategory } from "./subcategory";

@Injectable()
export class SubcategoryService {
  subcategories: Subcategory[] = [
    { id:0, title:"Violão" },
    { id:1, title:"Ingles" },
    { id:2, title:"Corrida" },
    { id:3, title:"Matemática" },
    { id:4, title:"Dança" },
  ];

  autoIncrement: number = 5;
  constructor() { }

  getAll() {
    return this.subcategories;
  }

  get(_id: number) {
    return this.subcategories.find(subcategory => subcategory.id == _id);
  }

  add(_category: Subcategory) {
    _category.id = this.autoIncrement++;
    this.subcategories.push(_category);
  }

  update(_id: number, _category: Subcategory) {
    let i = this.subcategories.indexOf(this.get(_id), 0);
    this.subcategories[i] = _category;
  }

  delete(_category: Subcategory) {
    let i = this.subcategories.indexOf(_category, 0);
    if (i > -1) {
      this.subcategories.splice(i, 1);
    }
  }
}
