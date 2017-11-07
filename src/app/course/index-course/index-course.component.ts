import { Component, OnInit } from '@angular/core';
import { Course } from "../course";
import { CourseService } from "../course.service";


@Component({
  selector: 'app-index-course',
  templateUrl: './index-course.component.html'
})
export class IndexCourseComponent implements OnInit {
  title = "Lista de Cursos";
  courses: Course[]=[];
  constructor(private service:CourseService) { }

  ngOnInit() {
   this.courses = this.service.getAll();
  }
  delete(_course:Course){
  this.service.delete(_course);
  }

}
