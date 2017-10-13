import {Component, OnInit} from '@angular/core';
import {BookDataService} from '../shared/book-data.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../shared/book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(({isbn}) => this.bookData.getBookByIsbn(isbn))
      .subscribe(book => this.book = book);
  }

  save() {
    console.log(this.book);
  }
}
