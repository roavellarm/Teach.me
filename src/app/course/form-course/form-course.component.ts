import { UserService } from './../../user/user.service';
import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from "../course";
import { CourseService } from "../course.service";
import { User } from './../../user/user';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html'
})
export class FormCourseComponent implements OnInit {
  course:Course;
  user: User;
  users: User[] = [];
  instructors: User[] = [];
  categories: Category[]=[];
  id:number;
  constructor(private service: CourseService, private userService: UserService, private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.users = this.userService.getAll();
    this.categories = this.categoryService.getAll();
    this.instructors = this.userService.getInstructors();
    this.id = this.activatedRoute.snapshot.params['id'];

    if (isNaN(this.id)){
      this.course = new Course();
    }
    else 
    {
       this.course = Object.assign({}, this.service.get(this.id));
    }
  }

  save() 
  {
    if (isNaN(this.id)) {
      // this.user = localStorage.getItem('currentUser');
      this.course.instructor = this.user;
      this.service.post(this.course);
      this.course = new Course();
    } 
    else
    {
      this.service.put(this.id, this.course);
    }
    this.router.navigate(['/course']);
  }

  cancel() {
    this.router.navigate(['/course']);
  }

}
