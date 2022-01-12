import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/model/course';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServiceService {

  constructor(
    private http: HttpClient
    ) { }

    getAllCoursesByProfessor(userId: any) {
      return this.http.get<Course[]>(`http://localhost:8080/courses/professor/${userId}`)
    }
}
