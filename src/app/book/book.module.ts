import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookDataService} from './shared/book-data.service';
import {ConfirmCandeactivateGuard} from './shared/confirm-candeactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent
  ],
  providers: [
    BookDataService,
    ConfirmCandeactivateGuard
  ]
})
export class BookModule { }
