import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { UserBilling } from '../models/user-billing';
import { UserPayment } from '../models/user-payment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  private serverPath: string = "http://127.0.0.1:8080";
  //private loggedIn = false;
  private dataFetched = false;
	private loginError:boolean;
	private loggedIn:boolean;
	private credential = {'username':'', 'password':''};

	private user: User = new User();
	private updateSuccess: boolean;
	private newPassword: string;
	private incorrectPassword: boolean;
	private currentPassword: string;

  constructor(
  	private loginService: LoginService,
  	private userService: UserService,
  	private router: Router
  	) { }

    onUpdateUserInfo () {
      this.userService.updateUserInfo(this.user, this.newPassword, this.currentPassword).subscribe(
        res => {
          console.log(res.text());
          this.updateSuccess=true;
        },
        error => {
          console.log(error.text());
          let errorMessage = error.text();
          if(errorMessage==="Incorrect current password!") this.incorrectPassword=true;
        }
      );
    }

    getCurrentUser() {
      this.userService.getCurrentUser().subscribe(
        res => {
          this.user = res.json();
          this.dataFetched = true;
        },
        err => {
          console.log(err);
        }
      );
    }



  logout() {
  	this.loginService.logout().subscribe(
  		res => {
  			location.reload();
  		},
  		err => {
  			console.log(err);
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
  			console.log("inactive session");
  			this.router.navigate(['/home']);
  		}
  	);

  	this.getCurrentUser();
  }

}