import { TestBed } from '@angular/core/testing';

import { HistoricalWeatherService } from './historical-weather-service.service';

describe('HistoricalWeatherService', () => {
  let service: HistoricalWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
