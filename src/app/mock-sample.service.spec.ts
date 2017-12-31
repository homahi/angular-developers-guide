import { TestBed, inject } from '@angular/core/testing';

import { MockSampleService } from './mock-sample.service';

describe('MockSampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockSampleService]
    });
  });

  it('should be created', inject([MockSampleService], (service: MockSampleService) => {
    expect(service).toBeTruthy();
  }));
});
