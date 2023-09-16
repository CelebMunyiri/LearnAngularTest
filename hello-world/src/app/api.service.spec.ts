import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
   httpClientSpy = {
    post:jest.fn()
   }

   service=new ApiService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
