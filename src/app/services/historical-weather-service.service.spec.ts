import { TestBed } from '@angular/core/testing';

import { HistoricalWeatherServiceService } from './historical-weather-service.service';

describe('HistoricalWeatherServiceService', () => {
  let service: HistoricalWeatherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalWeatherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
