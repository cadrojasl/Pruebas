import { TestBed } from '@angular/core/testing';

import { PeriferiaService } from './periferia.service';

describe('PeriferiaService', () => {
  let service: PeriferiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriferiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
