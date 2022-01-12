import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/model/course';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getCoursesByUserId(userId: any) {
    return this.http.get<Course[]>(`http://localhost:8080/courses/student/${userId}`)
  }

  enrollInCourse(course: Course) {
    let courseId = course.code
    return this.http.put(`http://localhost:8080/courses/enroll/${courseId}`, course)
  }

  unenrollInCourse(course: Course) {
    let courseId = course.code
    return this.http.put(`http://localhost:8080/courses/unenroll/${courseId}`, course)
  }



}
