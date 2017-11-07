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

  ngOnInit() {
    this.categories = this.categoryService.getAll();
  }

  delete(category: Category) {
    this.categoryService.delete(category);
  }

}
