import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})

export class FpasswordComponent implements OnInit {

  private serverPath: string = "https://127.0.0.1:8080";
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username':'', 'password':''};

  private emailSent: boolean =false;
  private usernameExists:boolean;
  private emailExists:boolean;
  private username:string;
  private email:string;

  private emailNotExists: boolean =false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail:string;
 
  constructor(
      private loginService: LoginService,
      private userService: UserService,
      private router: Router
      ) { }

      onForgetPassword() {
        this.forgetPasswordEmailSent = false;
        this.emailNotExists = false;
    
        this.userService.retrievePassword(this.recoverEmail).subscribe(
          res => {
            console.log(res);
            this.emailSent = true;
          },
          error => {
            console.log(error.text());
            let errorMessage = error.text();
            if(errorMessage==="emailExists") this.emailExists=true;
          }
        );
      }

  ngOnInit() {
  }

}
