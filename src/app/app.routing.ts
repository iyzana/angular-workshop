import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MouseCursorComponent} from './mouse-cursor/mouse-cursor.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'mouse', component: MouseCursorComponent },
  { path: 'books', loadChildren: './book/book.module#BookModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
