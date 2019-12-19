import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from '../../../node_modules/ngx-bootstrap/modal';
import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',

})



export class RegistrationComponent implements OnInit {

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
     
  
    constructor(
        private loginService: LoginService,
        private userService: UserService,
        private router: Router
        ) { }
    
        onNewAccount() {
            this.usernameExists = false;
            this.emailExists = false;
            this.emailSent = false;
      
            this.userService.newUser(this.username, this.email).subscribe(
                res => {
                    console.log(res);
                    this.emailSent = true;
                }, 
                error => {
                    console.log(error.text());
                    let errorMessage = error.text();
                    if(errorMessage==="usernameExists") this.usernameExists=true;
                    if(errorMessage==="emailExists") this.emailExists=true;
                }
            );
        }
        
    ngOnInit() {

        
  }


     
}
