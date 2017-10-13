import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookDataService} from '../shared/book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;
  error = false;

  constructor(private fb: FormBuilder, private bookData: BookDataService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      isbn: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      abstract: ['', Validators.required],
      numPages: ['', Validators.required],
      author: ['', Validators.required]
    });

    //   publisher: {
    //     name: string;
    //     url: string;
    //   }
    //   ;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('create', this.form.value);
      this.bookData.createBook(this.form.value);
    } else {
      this.error = true;
    }
  }
}
