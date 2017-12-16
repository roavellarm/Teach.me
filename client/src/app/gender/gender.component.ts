import { Component, OnInit } from '@angular/core';
import { Gender } from "./gender";
import { GenderService } from "./gender.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  gender:Gender;
  id:number;

  constructor(
    private genderService: GenderService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (isNaN(this.id)){
      this.gender = new Gender();
    } else {
      this.genderService.get(this.id).subscribe(
        (gend: Gender) => { this.gender = Object.assign({}, gend); }
      );
    }
  }

  save() 
  {
    if (isNaN(this.id)) {
      this.genderService.post(this.gender).subscribe(
        (gend: Gender) => {
          this.gender = new Gender();
          this.router.navigate(['/user']);
        }
      );
    } else {
      this.genderService.put(this.gender).subscribe(
        (gend: Gender) => { this.router.navigate(['/user']); }
      );
    }
  }

  cancel() {
    this.router.navigate(['/user']);
  }
  
}
