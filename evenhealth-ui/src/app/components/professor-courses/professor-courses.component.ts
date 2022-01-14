import { Component, OnInit } from '@angular/core';
import { ProfessorServiceService } from 'src/app/service/professor/professor-service.service';

@Component({
  selector: 'app-professor-courses',
  templateUrl: './professor-courses.component.html',
  styleUrls: ['./professor-courses.component.css']
})
export class ProfessorCoursesComponent implements OnInit {

  displayedColumns: string[] = ['description', 'capacity'];

  constructor(
    private professorService: ProfessorServiceService
  ) { }

  ngOnInit(): void {
    
  }

  getCoursesByProfessor(id: any) {
    this.professorService.getAllCoursesByProfessor(10)
  }

}
