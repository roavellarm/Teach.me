import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service'
import { Category } from '../category';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html'
})

export class FormCategoryComponent implements OnInit {
  category: Category;
  id: number;
  error: string;
  showAlert: boolean = false;

  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (isNaN(this.id)){
      this.category = new Category();
    } else {
      this.category = Object.assign({},
        this.categoryService.get(this.id)
      );
    }
  }

  save() {
    if (isNaN(this.id)) {
      this.categoryService.add(this.category);
      this.category = new Category();
    } else {
      this.categoryService.update(this.id, this.category);
    }
    this.router.navigate(['/category']);
  }

  cancel() {
    this.router.navigate(['/category']);
  }
}