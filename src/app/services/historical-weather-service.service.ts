import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HistoricalWeather } from './historical-weather-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricalWeatherServiceService {

  constructor(private http: HttpClient) { 

  }

  getWeather(startDate: string, endDate: string): Observable<HistoricalWeather[]>{
    console.log('inside of weather service');
    const options = { params: new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate)};
    return this.http.get<HistoricalWeather[]>('https://localhost:5001/HistoricalWeather', options);
  }
}
