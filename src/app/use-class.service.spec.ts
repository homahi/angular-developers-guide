import { TestBed, inject } from '@angular/core/testing';

import { UseClassService } from './use-class.service';

describe('UseClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseClassService]
    });
  });

  it('should be created', inject([UseClassService], (service: UseClassService) => {
    expect(service).toBeTruthy();
  }));
});
