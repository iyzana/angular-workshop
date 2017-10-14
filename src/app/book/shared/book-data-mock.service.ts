import {Injectable} from '@angular/core';
import {Book} from './book';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookDataMockService {

  constructor() {
  }

  getBooks() {
    return Observable.of([]);
    // return this.http.get(`${this.bookService}/books`);
  }

  getBookByIsbn(isbn: string) {
    return Observable.of();
    // return this.http.get(`${this.bookService}/books/${isbn}`);
  }

  updateBook(book: Book): void {
    // this.http.put(`${this.bookService}/books/${book.isbn}`, book).subscribe();
  }

  createBook(book: Book): void {
    // this.http.post(`${this.bookService}/books`, book).subscribe();
  }
}
