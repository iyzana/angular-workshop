import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InfoBoxComponent} from './info-box/info-box.component';
import {MouseCursorComponent} from './mouse-cursor/mouse-cursor.component';
import {TitleBoxComponent} from './title-box/title-box.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookDataService} from './book/shared/book-data.service';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import {BookModule} from './book/book.module';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    routing,
    BookModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BookDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
