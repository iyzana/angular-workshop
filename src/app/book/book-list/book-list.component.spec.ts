import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import {BookDataMockService} from '../shared/book-data-mock.service';
import {BookDataService} from '../shared/book-data.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ScrollPipe} from '../../shared/scroll.pipe';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent, ScrollPipe ],
      imports: [RouterTestingModule],
      providers: [{provide: BookDataService, useClass: BookDataMockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
