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

  constructor(
    private categoryService: CategoryService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (isNaN(this.id)){
      this.category = new Category();
    } else {
      this.categoryService.get(this.id).subscribe(
        (cat: Category) => { this.category = Object.assign({}, cat); },
        error => { console.log(error);}        
      );
    }
  }

  save() {
    if (isNaN(this.id)) {
      this.categoryService.post(this.category).subscribe(
        (cat: Category) => {
          this.category = new Category();
          this.router.navigate(['/category']);
        },
        error => { console.log(error);}        
      );
    } else {
      this.categoryService.put(this.category).subscribe(
        (cat: Category) => { this.router.navigate(['/category']); },
        error => { console.log(error);}        
      );
    }
  }

  cancel() {
    this.router.navigate(['/category']);
  }
}