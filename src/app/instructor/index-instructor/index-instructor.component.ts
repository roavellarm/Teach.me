import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { Instructor } from '../instructor';

@Component({
  selector: 'app-index-instructor',
  templateUrl: './index-instructor.component.html'
})
export class IndexInstructorComponent implements OnInit {
  instructors: Instructor[] = [];

  constructor(private service: InstructorService) { }

  ngOnInit() {
    this.instructors = this.service.getAll();
  }

}
