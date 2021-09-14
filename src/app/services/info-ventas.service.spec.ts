import { TestBed } from '@angular/core/testing';

import { InfoVentasService } from './info-ventas.service';

describe('InfoVentasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoVentasService = TestBed.get(InfoVentasService);
    expect(service).toBeTruthy();
  });
});
