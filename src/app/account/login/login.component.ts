import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorService } from '../../instructor/instructor.service';
import { StudentService } from '../../student/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private instructorService: InstructorService, private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  login() {
      localStorage.setItem('currentUser', 'Ciclano');
      this.router.navigate(['/index']);
  }

}
