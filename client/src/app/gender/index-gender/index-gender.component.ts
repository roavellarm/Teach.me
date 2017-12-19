import { Component, OnInit } from '@angular/core';
import { GenderService } from '../gender.service';
import { Gender } from '../gender';

@Component({
  selector: 'app-index-gender',
  templateUrl: './index-gender.component.html'
})
export class IndexGenderComponent implements OnInit {
  title = 'Gêneros';
  genders: Gender[] = [];

  constructor(private genderService: GenderService) { }

  ngOnInit(){
    this.updateGenderList();
  }

  delete(gender: Gender) {
    this.genderService.delete(gender).subscribe(
      (gen: Gender) => { this.updateGenderList(); },
      error => { console.log(error); }
    );
  }

  updateGenderList() {
    this.genderService.getAll().subscribe(
      genderList => { this.genders = genderList; },
      error => { console.log(error); }
    );
  }
}
