import { Component, OnInit } from '@angular/core';
import { Sex } from "./sex";
import { SexService } from "./sex.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.scss']
})
export class SexComponent implements OnInit {
  sex:Sex;
  id:number;

  constructor(
    private service: SexService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (isNaN(this.id)){
      this.sex = new Sex();
    }
    else 
    {
       this.sex = Object.assign({}, this.service.get(this.id));
    }
  }

  save() 
  {
    if (isNaN(this.id)) {
      this.service.post(this.sex);
      this.sex = new Sex();
    } 
    else
    {
      this.service.put(this.id, this.sex);
    }
    this.router.navigate(['/user']);
  }

  cancel() {
    this.router.navigate(['/user']);
  }


}
