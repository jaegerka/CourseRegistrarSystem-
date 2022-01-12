import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoreserviceService } from 'src/app/service/coreservice.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private coreService: CoreserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //Todo: Add Security to check userrname and password fields are completed 
  login(username: any, password: any) {

    console.log(username);
    console.log(password);

    localStorage.setItem("username", username);
    this.router.navigate(['home']);


  //Todo: Implement Login API Call
  /* 
    this.coreService.login(username, password)
      .subscribe((data) => {
        console.log(data);
        localStorage.setItem("username", username);
        this.router.navigate(['home']);
      })
  */
  }
}
