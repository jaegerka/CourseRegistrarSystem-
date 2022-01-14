import { Component, Input, OnInit } from '@angular/core';
import { CoreserviceService } from 'src/app/service/coreservice.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  displayedColumns: string[] = ['description', 'professor', 'capacity', 'actions'];

  @Input() user;

  constructor(private coreService: CoreserviceService) { 
    
  }

  courseList = []

  ngOnInit(): void {
    this.coreService.getAllCourses()
      .subscribe(result => {
        this.courseList = result['_embedded'].courses;
        console.log(this.courseList);
      })

      console.log(this.user);
  }

  

}
