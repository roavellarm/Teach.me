import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
=======

import { IndexInstructorComponent } from './instructor/index-instructor/index-instructor.component';
import { FormInstructorComponent } from './instructor/form-instructor/form-instructor.component';
import { InstructorService } from './instructor/instructor.service';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'instructor', component: IndexInstructorComponent },
  { path: 'instructor/:id', component: FormInstructorComponent },
  { path: 'instructor/new', component: FormInstructorComponent },
]
>>>>>>> development-instructor

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [InstructorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
