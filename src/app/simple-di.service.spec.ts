import { TestBed, inject } from '@angular/core/testing';

import { SimpleDiService } from './simple-di.service';

describe('SimpleDiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleDiService]
    });
  });

  it('should be created', inject([SimpleDiService], (service: SimpleDiService) => {
    expect(service).toBeTruthy();
  }));
});
