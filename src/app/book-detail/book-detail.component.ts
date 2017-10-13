import {Component, OnInit} from '@angular/core';
import {BookDataService} from '../shared/book-data.service';
import {Book} from '../shared/book';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(({isbn}) => this.bookData.getBookByIsbn(isbn))
      .subscribe(book => this.book = book);
  }
}
