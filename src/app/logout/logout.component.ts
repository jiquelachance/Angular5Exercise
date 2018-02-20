import { Component, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  isLogged: boolean = true;

  @Output() logoutEvent = new EventEmitter<boolean>();

  constructor(public snackBar: MatSnackBar) { }

  logout(){
  	this.isLogged = false;
    this.logoutEvent.emit(this.isLogged);
    this.snackBar.open('Logout successful!', 'Logout', {
                duration: 3000
              });
  }

}
