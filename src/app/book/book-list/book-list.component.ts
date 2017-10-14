import {Component, OnInit} from '@angular/core';
import {BookDataService} from '../shared/book-data.service';
import {Book} from '../shared/book';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bookData: BookDataService) {
  }

  ngOnInit() {
    this.books = this.bookData.getBooks();
  }
}
