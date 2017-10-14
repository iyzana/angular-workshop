import {inject, TestBed} from '@angular/core/testing';

import {BookDataService} from './book-data.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('BookDataService', () => {
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookDataService,
        // MockBackend,
        // BaseRequestOptions,
        // {
        //   provide: HttpClient,
        //   useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        //     return new HttpClient(defaultOptions);
        //   },
        //   deps: [MockBackend, BaseRequestOptions]
        // },
      ],
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));
});
