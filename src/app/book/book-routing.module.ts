import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {ConfirmCandeactivateGuard} from './shared/confirm-candeactivate.guard';

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent
  }, {
    path: ':isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmCandeactivateGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
