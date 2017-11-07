import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';

import { IndexInstructorComponent } from './instructor/index-instructor/index-instructor.component';
import { FormInstructorComponent } from './instructor/form-instructor/form-instructor.component';
import { InstructorService } from './instructor/instructor.service';

import { IndexStudentComponent } from './student/index-student/index-student.component';
import { FormStudentComponent } from './student/form-student/form-student.component';
import { StudentService } from './student/student.service';

import { IndexUserComponent } from './user/index-user/index-user.component';
import { FormUserComponent } from './user/form-user/form-user.component';
import { UserService } from './user/user.service';

import { FormCourseComponent } from './course/form-course/form-course.component';
import { IndexCourseComponent } from './course/index-course/index-course.component';
import { CourseService } from './course/course.service'

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'instructor', component: IndexInstructorComponent },
  { path: 'instructor/:id', component: FormInstructorComponent },
  { path: 'instructor/new', component: FormInstructorComponent },
  { path: 'student', component: IndexStudentComponent },
  { path: 'student/:id', component: FormStudentComponent },
  { path: 'student/new', component: FormStudentComponent },
  { path: 'user', component: IndexUserComponent },
  { path: 'user/:id', component: FormUserComponent },
  { path: 'user/new', component: FormUserComponent },
  { path: 'course', component: IndexCourseComponent },
  { path: 'course/:id', component: FormCourseComponent },
  { path: 'course/new', component: FormCourseComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IndexInstructorComponent,
    FormInstructorComponent,
    IndexStudentComponent,
    FormStudentComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    FormCourseComponent,
    IndexCourseComponent,
    RegisterComponent,
    LoginComponent,
    IndexUserComponent,
    FormUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [InstructorService, StudentService, UserService, CourseService,{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})

export class AppModule { }