import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IndexInstructorComponent } from './instructor/index-instructor/index-instructor.component';
import { FormInstructorComponent } from './instructor/form-instructor/form-instructor.component';
import { InstructorService } from './instructor/instructor.service';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexInstructorComponent },
  { path: 'edit/:id', component: FormInstructorComponent },
  { path: 'new', component: FormInstructorComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    IndexInstructorComponent,
    FormInstructorComponent,
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
