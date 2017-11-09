import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../subcategory.service';
import { Subcategory } from '../subcategory';

@Component({
  selector: 'app-index-subcategory',
  templateUrl: './index-subcategory.component.html'
})
export class IndexSubcategoryComponent implements OnInit {
  title = 'Lista de Subcategorias';
  categories: Subcategory[] = [];

  constructor(private subcategoryService: SubcategoryService) { }

  ngOnInit() {
    this.categories = this.subcategoryService.getAll();
  }

  delete(subcategory: Subcategory) {
    this.subcategoryService.delete(subcategory);
  }

}