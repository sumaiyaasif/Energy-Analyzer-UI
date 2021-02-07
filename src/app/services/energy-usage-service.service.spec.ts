import { TestBed } from '@angular/core/testing';

import { EnergyUsageService} from './energy-usage-service.service';

describe('EnergyUsageService', () => {
  let service: EnergyUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
