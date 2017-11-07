import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service'
import { Category } from '../category';


@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html'
})
export class FormCategoryComponent implements OnInit {
  
  constructor(private router: Router) {
    
  }

  ngOnInit() { }

  save() {
    
  }

  cancel() {
    this.router.navigate(['/index']);
  }
}