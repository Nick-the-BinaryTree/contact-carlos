import { TestBed } from '@angular/core/testing';

import { AllowContactService } from './allow-contact.service';

describe('AllowContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllowContactService = TestBed.get(AllowContactService);
    expect(service).toBeTruthy();
  });
});
