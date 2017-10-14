import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewComponent } from './book-new.component';
import {BookDataMockService} from '../shared/book-data.service.mock';
import {BookDataService} from '../shared/book-data.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNewComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [{provide: BookDataService, useClass: BookDataMockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
