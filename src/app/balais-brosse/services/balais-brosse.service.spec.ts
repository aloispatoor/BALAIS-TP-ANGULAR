import { TestBed } from '@angular/core/testing';

import { BalaisBrosseService } from './balais-brosse.service';

describe('BalaisBrosseService', () => {
  let service: BalaisBrosseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalaisBrosseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
