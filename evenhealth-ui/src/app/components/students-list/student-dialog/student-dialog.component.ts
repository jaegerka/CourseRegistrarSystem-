import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminServiceService } from 'src/app/service/admin/admin-service.service';
import { Student } from 'src/app/shared/model/student';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  constructor(
    private adminService: AdminServiceService,
  ) { }

  ngOnInit(): void {
  }

  submit(username: any, firstName: any, lastName: any) {

    console.log(firstName)
    
    let newStudent: Student =  {
      id: 5,
      first_name: firstName,
      last_name: lastName,
      username: username,
    }

    this.adminService.createStudent(newStudent)
      .subscribe((data) => {
        console.log(data);
      })
      

  }

}
