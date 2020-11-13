import { TestBed } from '@angular/core/testing';

import { EnergyUsageServiceService } from './energy-usage-service.service';

describe('EnergyUsageServiceService', () => {
  let service: EnergyUsageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyUsageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
