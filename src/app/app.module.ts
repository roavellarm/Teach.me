import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexInstructorComponent } from './index-instructor/index-instructor.component';
import { FormInstructorComponent } from './form-instructor/form-instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexInstructorComponent,
    FormInstructorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
