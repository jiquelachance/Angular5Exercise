import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { BooksAPIResponse } from '../books/booksAPIResponse';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksAPIResponse: BooksAPIResponse;
  booksLoaded: boolean = false;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
  	this.getFirstPageBooks(1);
  }

  getFirstPageBooks(pageNumber: number): void {
  	this.bookService.getBooks(pageNumber)
      .subscribe(response => {
        this.booksAPIResponse = response;
        this.booksLoaded = true;
      });
  }

  getBooks(pageEvent?:PageEvent){
    this.bookService.getBooks(pageEvent.pageIndex + 1)
      .subscribe(response => {
        this.booksAPIResponse = response;
        this.booksLoaded = true;
      });  
  }

}
