import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-index-category',
  templateUrl: './index-category.component.html'
})
export class IndexCategoryComponent implements OnInit {
  title = 'Lista de Categorias';
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(){
    this.updateCategoryList();
  }

  delete(category: Category) {
    this.categoryService.delete(category).subscribe(
      (cat: Category) => { this.updateCategoryList(); },
      error => { console.log(error); }
    );
  }

  updateCategoryList() {
    this.categoryService.getAll().subscribe(
      (categoryList: Category[]) => { this.categories = categoryList; },
      error => { console.log(error); }
    );
  }
}
