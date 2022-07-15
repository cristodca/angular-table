import { TestBed } from '@angular/core/testing';

import { FacturasEmitidasService } from './facturas-emitidas.service';

describe('FacturasEmitidasService', () => {
  let service: FacturasEmitidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturasEmitidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
