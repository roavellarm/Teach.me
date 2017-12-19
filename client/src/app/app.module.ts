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

import { ProfileUserComponent } from './user/profile/profile-user.component';
import { IndexUserComponent } from './user/index-user/index-user.component';
import { FormUserComponent } from './user/form-user/form-user.component';
import { UserService } from './user/user.service';

import { FormCourseComponent } from './course/form-course/form-course.component';
import { IndexCourseComponent } from './course/index-course/index-course.component';
import { CourseService } from './course/course.service'

import { FormCategoryComponent } from './category/form-category/form-category.component';
import { IndexCategoryComponent } from './category/index-category/index-category.component';
import { CategoryService } from './category/category.service'

import { FormGenderComponent } from './gender/form-gender/form-gender.component';
import { IndexGenderComponent } from './gender/index-gender/index-gender.component';
import { GenderService } from './gender/gender.service';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';
import { MoedaPipe } from './moeda.pipe';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },

  { path: 'index', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile/:id', component: ProfileUserComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'user', component: IndexUserComponent },
  { path: 'user/:id', component: FormUserComponent },
  { path: 'user/new', component: FormUserComponent },

  { path: 'course', component: IndexCourseComponent },
  { path: 'course/:id', component: FormCourseComponent },
  { path: 'course/new', component: FormCourseComponent },

  { path: 'category', component: IndexCategoryComponent },
  { path: 'category/:id', component: FormCategoryComponent },
  { path: 'category/new', component: FormCategoryComponent },

  { path: 'gender', component: IndexGenderComponent },
  { path: 'gender/:id', component: FormGenderComponent },
  { path: 'gender/new', component: FormGenderComponent },

  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MoedaPipe,

    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,

    RegisterComponent,
    LoginComponent,

    FormCourseComponent,
    IndexCourseComponent,

    FormUserComponent,
    IndexUserComponent,
    ProfileUserComponent,

    FormCategoryComponent,
    IndexCategoryComponent,
    
    FormGenderComponent,
    IndexGenderComponent,
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
  providers: [UserService, CourseService, CategoryService, GenderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})

export class AppModule { }