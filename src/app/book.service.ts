import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BooksAPIResponse } from './books/booksAPIResponse';

@Injectable()
export class BookService {

  emptyResponse: BooksAPIResponse;
  private booksUrl = 'https://reqres.in/api/books?page=';

  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }

  getBooks(pageNumber: number): Observable<BooksAPIResponse>{
  	return this.http.get<BooksAPIResponse>(this.booksUrl + pageNumber)
  	 .pipe(
      catchError(this.handleError('getBooks', this.emptyResponse))
    );
  }

    /**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {

	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead

	    // TODO: better job of transforming error for user consumption
		this.snackBar.open('${operation} failed: ${error.message}', 'Loading books', {
                duration: 3000
              });

	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
	}

}
