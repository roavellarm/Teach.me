import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor.service'
import { Instructor } from '../instructor';

@Component({
  selector: 'app-form-instructor',
  templateUrl: './form-instructor.component.html'
})
export class FormInstructorComponent implements OnInit {
  instructor: Instructor;
  id: number;

  constructor(private service: InstructorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (isNaN(this.id)) {
      this.instructor = new Instructor();
    } else {
      this.instructor = Object.assign({},
        this.service.get(this.id)
      );
    }
  }

  save() { 
    if (isNaN(this.id)) {
      this.service.post(this.instructor);
      this.instructor = new Instructor();
    } else {
      this.service.put(this.id, this.instructor);
    }

    this.router.navigate(['index']);
  }
  
  cancel() { 
    this.router.navigate(['/index']);
  }

}
