import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ProgramComponent } from './program/program.component';
import { CourseComponent } from './course/course.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProgramListComponent,
    CourseListComponent,
    ProgramComponent,
    CourseComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
