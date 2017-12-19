import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user/user.service';
import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from "../course";
import { CourseService } from "../course.service";
import { User } from './../../user/user';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html'
})
export class FormCourseComponent implements OnInit {
  course: Course;
  id: any;
  categories: Category[]=[];
  users: User[] = [];
  // students: User[] = [];
  // instructors: User[] = [];

  currentUser: string;

  constructor(
    private courseService: CourseService, 
    private userService: UserService, 
    private categoryService: CategoryService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() 
  {
    this.id = this.activatedRoute.snapshot.params['id']; // Clona o id da url
    this.currentUser = localStorage.getItem('currentUser'); // Pega o usuário logado
    this.categoryService.getAll().subscribe( // Carrega as categorias do banco na lista de categorias
      (cat: Category[]) => { this.categories = cat; }
    );
    
    if (this.id == "new"){
      this.course = new Course();
    }
    else 
    {
      this.courseService.get(this.id).subscribe(
        (course: Course) => { this.course = Object.assign({}, course); }
      );
    }
  }

  save() 
  {
    if (this.id == "new") {
      this.course.instructor = this.userService.getByEmail(this.currentUser);
      this.courseService.post(this.course).subscribe(
        (cours: Course) => {
          this.refreshUsers();
          this.course = new Course();
          this.router.navigate(['/course']);
        }
      );
    } 
    else
    {
      this.courseService.put(this.course).subscribe(
        (cours: Course) => { 
          this.refreshUsers();
          this.router.navigate(['/course']); 
        }
      );
    }
  }

  cancel() {
    this.refreshUsers();
    this.router.navigate(['/course']);
  }

  refreshUsers() {
    this.userService.getAll().subscribe(
      (users: User[]) => { this.users = users; }
    );
  }

}
