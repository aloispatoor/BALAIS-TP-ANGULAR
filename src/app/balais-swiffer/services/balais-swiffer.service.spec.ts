import { TestBed } from '@angular/core/testing';

import { BalaisSwifferService } from './balais-swiffer.service';

describe('BalaisSwifferService', () => {
  let service: BalaisSwifferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalaisSwifferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
