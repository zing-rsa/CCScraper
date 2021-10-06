import { TestBed } from '@angular/core/testing';

import { AlphaService } from './alpha.service';

describe('AlphaService', () => {
  let service: AlphaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
