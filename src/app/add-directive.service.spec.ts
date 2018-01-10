import { TestBed, inject } from '@angular/core/testing';

import { AddDirectiveService } from './add-directive.service';

describe('AddDirectiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDirectiveService]
    });
  });

  it('should be created', inject([AddDirectiveService], (service: AddDirectiveService) => {
    expect(service).toBeTruthy();
  }));
});
