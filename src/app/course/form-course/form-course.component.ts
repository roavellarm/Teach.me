import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from "../course";
import { CourseService } from "../course.service";

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html'
})
export class FormCourseComponent implements OnInit {
  course:Course;
  id:number;
  constructor(private service: CourseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (isNaN(this.id)){
      this.course = new Course();
    }
    else 
    {
       this.course = Object.assign({},this.service.get(this.id));
    }
  }

  save() 
  {
    if (isNaN(this.id)) {
      this.course.instructor = localStorage.getItem('currentUser');
      this.service.add(this.course);
      this.course = new Course();
    } 
    else
    {
      this.service.update(this.id, this.course);
    }
    this.router.navigate(['/course']);
  }

  cancel() {
    this.router.navigate(['/course']);
  }

}
