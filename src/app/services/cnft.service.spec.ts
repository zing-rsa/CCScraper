import { TestBed } from '@angular/core/testing';

import { CnftService } from './cnft.service';

describe('CnftService', () => {
  let service: CnftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
