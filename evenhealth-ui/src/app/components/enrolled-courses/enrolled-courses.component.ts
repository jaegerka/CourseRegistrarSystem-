import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  displayedColumns: string[] = ['description', 'professor', 'capacity', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
