import { TestBed, inject } from '@angular/core/testing';

import { UseValueService } from './use-value.service';

describe('UseValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseValueService]
    });
  });

  it('should be created', inject([UseValueService], (service: UseValueService) => {
    expect(service).toBeTruthy();
  }));
});
