import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnergyUsageModel } from './energy-usage-model';

@Injectable({
  providedIn: 'root'
})
export class EnergyUsageService {

  constructor(private http: HttpClient) { 

  }


  getDailyUsage(startDate: string, endDate: string): Observable<EnergyUsageModel[]>{
    const options = { params: new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate)};
    return this.http.get<EnergyUsageModel[]>('https://localhost:5001/EnergyConsumption', options);
  }
}
