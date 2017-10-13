import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InfoBoxComponent} from './info-box/info-box.component';
import {MouseCursorComponent} from './mouse-cursor/mouse-cursor.component';
import {TitleBoxComponent} from './title-box/title-box.component';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
