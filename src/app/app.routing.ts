import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {MouseCursorComponent} from './mouse-cursor/mouse-cursor.component';

const routes: Routes = [{
  path: 'books',
  component: BookListComponent
}, {
 path: 'mouse',
 component: MouseCursorComponent
}, {
  path: '',
  redirectTo: 'books',
  pathMatch: 'full'
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
