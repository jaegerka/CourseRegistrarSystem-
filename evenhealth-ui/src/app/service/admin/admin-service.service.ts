import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/model/course';
import { Student } from 'src/app/shared/model/student';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(
    private http: HttpClient
  ) { }

  createCourse(course: Course) {
    return this.http.post<Course>('http://localhost:8080/courses/create', course)
  }

  updateCourse(course: Course) {
    return this.http.put<Course>('http://localhost:8080/courses/update', course)
  }

  deleteCourse(course: Course) {
    return this.http.put<Course[]>('http://localhost:8080/courses/delete', course)
  }

  getAllStudents() {
    return this.http.get<Student[]>('http://localhost:8080/students')
  }

  createStudent(student: Student) {
    return this.http.post<Student>('http://localhost:8080/students/create', student)
  }

  deleteStudent(student_id: Number) {
    return this.http.put(`http://localhost:8080/students/delete/${student_id}`, {observe: 'response'})
  }

}
