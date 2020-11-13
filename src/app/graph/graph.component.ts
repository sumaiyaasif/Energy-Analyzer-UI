import { Component, OnInit } from '@angular/core';
import { HistoricalWeatherServiceService } from '../services/historical-weather-service.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  
  constructor(private historicalWeather: HistoricalWeatherServiceService) { 
    this.getWeather();
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.historicalWeather.getWeather('06/10/2020', '06/30/2020').subscribe(weather => console.log(weather));
  }

}
