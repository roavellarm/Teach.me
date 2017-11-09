import { Component, OnInit } from '@angular/core';
import { Subcategory } from "../subcategory";
import { SubcategoryService } from "../subcategory.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-subcategory',
  templateUrl: './form-subcategory.component.html',
  styleUrls: ['./form-subcategory.component.scss']
})
export class FormSubcategoryComponent implements OnInit {
  subcategory: Subcategory;
  id: number;
  error: string;
  showAlert: boolean = false;

  constructor(
    private subcategoryService: SubcategoryService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (isNaN(this.id)){
      this.subcategory = new Subcategory();
    } else {
      this.subcategory = Object.assign({},this.subcategoryService.get(this.id));
    }
  }

  save() {
    if (isNaN(this.id)) {
      this.subcategoryService.add(this.subcategory);
      this.subcategory = new Subcategory();
    } else {
      this.subcategoryService.update(this.id, this.subcategory);
    }
    this.router.navigate(['/subcategory']);
  }

  cancel() {
    this.router.navigate(['/subcategory']);
  }

}
