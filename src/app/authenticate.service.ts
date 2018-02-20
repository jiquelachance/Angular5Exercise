import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticateService {

  private authenticateUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string){
  	return this.http.post<any>(this.authenticateUrl, { email: email, password: password }, {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	});
  }

}
