import { Component, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Credentials } from './credentials';

import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: Credentials = {
    email: "",
    password: "",
  };
  authenticationResponse: any;
  isLogged: boolean = false;

  constructor(private authenticateService: AuthenticateService, public snackBar: MatSnackBar) { }

  @Output() loginEvent = new EventEmitter<boolean>();

  login(){
  	this.authenticateService.authenticate(this.credentials.email, this.credentials.password)
	  	.subscribe(
	  		data => {
			  		this.authenticationResponse = data;
  					this.isLogged = true;
            this.loginEvent.emit(this.isLogged);
            this.snackBar.open('Login successful!', 'Login', {
                duration: 3000
              });
			  		},
        err => {
            this.authenticationResponse = err;
            this.isLogged = false;
            this.loginEvent.emit(this.isLogged);
            this.snackBar.open('Login failed! ' + this.authenticationResponse.error.error, 'Login', {
                duration: 3000
              });
            }
	  	);
  }

}