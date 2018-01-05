import { TestBed, inject } from '@angular/core/testing';

import { UseExistingService } from './use-existing.service';

describe('UseExistingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseExistingService]
    });
  });

  it('should be created', inject([UseExistingService], (service: UseExistingService) => {
    expect(service).toBeTruthy();
  }));
});
