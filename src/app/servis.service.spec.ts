import { TestBed } from '@angular/core/testing';

import { ServisService } from './servis.service';

describe('ServisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServisService = TestBed.get(ServisService);
    expect(service).toBeTruthy();
  });
});
