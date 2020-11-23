import { Component, OnInit } from '@angular/core';
import { HistoricalWeatherServiceService } from '../services/historical-weather-service.service';
import * as Highcharts from 'highcharts';
import { HistoricalWeather } from '../services/historical-weather-model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  isHighcharts = typeof Highcharts === 'object';
  Highcharts: typeof Highcharts = Highcharts;
  data: HistoricalWeather[] = [];
  averages: any[][] = [];
  chartOptions: Highcharts.Options = null;

  constructor(private historicalWeather: HistoricalWeatherServiceService) {
    this.getWeather();
  }

  ngOnInit(): void {
  }

  fillChart() {
    this.chartOptions = {
      series: [
      {
        type: 'line',
        name: 'Average Temp',
        data: this.averages
      }
      ],
      title: {
        text: 'Sumaiya\'s Chart'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%d %b %Y'
        }
      }
    };
  }

  getWeather() {
    this.historicalWeather.getWeather('06/10/2020', '06/30/2020').subscribe(weather => {
      this.data = weather;
      weather.forEach(element => {
        const date = new Date(element.date);
        this.averages.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), element.averageTemp]);
      });
      this.fillChart();
    });

  }

}
