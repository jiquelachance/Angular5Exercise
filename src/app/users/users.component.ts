import { Component } from '@angular/core';
import { User } from '../users/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  user: User = {
  	  name: 'Alessio',
  	  surname: 'Valenti',
  	  age: 25
  };

  constructor() { }

}
