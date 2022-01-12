import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { EnrolledCoursesComponent } from './components/enrolled-courses/enrolled-courses.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { ProfessorCoursesComponent } from './components/professor-courses/professor-courses.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/students-list/student-dialog/student-dialog.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    LoginComponent,
    HomeComponent,
    EnrolledCoursesComponent,
    StudentsListComponent,
    ProfessorCoursesComponent,
    StudentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
