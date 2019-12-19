import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

	  onLogin() {
		this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
			res => {
				console.log(res);
				localStorage.setItem("xAuthToken", res.json().token);
				this.loggedIn = true;
				this.router.navigate(['/product-list']);
				//location.reload();
				
			}, 
			error => {
				this.loggedIn = false;
				this.loginError = true;
			}
		);
	}

  

  ngOnInit() {
  	this.loginService.checkSession().subscribe(
  		res => {
  			this.loggedIn = true;
  		},
  		error => {
  			this.loggedIn = false;
  		}
  	);
  }

}
