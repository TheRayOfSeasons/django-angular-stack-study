import { TestBed } from '@angular/core/testing';

import { PromisetestService } from './promisetest.service';

describe('PromisetestService', () => {
  let service: PromisetestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromisetestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
