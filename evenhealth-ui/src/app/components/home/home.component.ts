import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreserviceService } from 'src/app/service/coreservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: String;

  constructor(
    private router: Router,
    private coreService: CoreserviceService
  ) { }

  ngOnInit(): void {
    this.setUser();
    this.coreService.getAllCourses()
      .subscribe(
        (data) => {
        console.log(data);
      },
      (error) => console.log(error))

  }

  setUser() {
    this.user = localStorage.getItem("username");
    
    switch(this.user) { 
      case "student01": { 
        this.user = "Student"
         break; 
      } 
      case "professor01": { 
         this.user = "Professor"
         break; 
      } 
      case "admin01": {
        this.user = "Admin"
        break;
      }
    } 
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
