import { Component, OnInit } from '@angular/core';
import { Gender } from "../gender";
import { GenderService } from "../gender.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-gender',
  templateUrl: './form-gender.component.html'
})
export class FormGenderComponent implements OnInit {
  gender:Gender;
  id: any;

  constructor(
    private genderService: GenderService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id == "new"){
      this.gender = new Gender();
    } else {
      this.genderService.get(this.id).subscribe(
        (gend: Gender) => { this.gender = Object.assign({}, gend); }
      );
    }
  }

  save() 
  {
    if (this.id == "new") {
      this.genderService.post(this.gender).subscribe(
        (gend: Gender) => {
          this.gender = new Gender();
          this.router.navigate(['/gender']);
        }
      );
    } else {
      this.genderService.put(this.gender).subscribe(
        (gend: Gender) => { this.router.navigate(['/gender']); }
      );
    }
  }

  cancel() {
    this.router.navigate(['/gender']);
  }
  
}
