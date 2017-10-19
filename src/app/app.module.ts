import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { IndexInstructorComponent } from './instructor/index-instructor/index-instructor.component';
import { FormInstructorComponent } from './instructor/form-instructor/form-instructor.component';
import { InstructorService } from './instructor/instructor.service';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'instructor', component: IndexInstructorComponent },
  { path: 'instructor/:id', component: FormInstructorComponent },
  { path: 'instructor/new', component: FormInstructorComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexInstructorComponent,
    FormInstructorComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
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