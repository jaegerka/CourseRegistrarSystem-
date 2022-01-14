import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminServiceService } from 'src/app/service/admin/admin-service.service';
import { Student } from 'src/app/shared/model/student';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentList = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'userName', 'actions'];
  newStudent: Student;

  constructor(
    private adminService: AdminServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.adminService.getAllStudents()
      .subscribe((result) => {
        console.log(result);
        this.studentList = result['_embedded'].students;
        console.log(this.studentList)
      }),
      (error) => {
        console.log(error)
      }
  }

  addStudent() {
    let studentDialog = this.dialog.open(StudentDialogComponent, {
      width: '60%'
    });
    studentDialog.afterClosed().subscribe(result => {
      console.log(result);
      this.loadStudents();
    });
  }

  deleteStudent(student: Student) {
    console.log(student.id);

    this.adminService.deleteStudent(student.id)
      .subscribe((data) => {
        
      },
      (error) => console.log(error));

    this.loadStudents();
  }

}
