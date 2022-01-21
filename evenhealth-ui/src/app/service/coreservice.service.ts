import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../shared/model/course';

@Injectable({
  providedIn: 'root'
})
export class CoreserviceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCourses() {
    return this.http.get<any[]>(`http://localhost:8080/courses`)
  }

  login(username: any, password: any) {
    return this.http.post<any>('http://localhost:8080/login', {
      username,
      password
    })
  }

}
