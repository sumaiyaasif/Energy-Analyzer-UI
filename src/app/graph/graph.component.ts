import { Component, OnInit } from '@angular/core';
import { HistoricalWeatherServiceService } from '../services/historical-weather-service.service';
import * as Highcharts from 'highcharts';
import { HistoricalWeather } from '../services/historical-weather-model';
import { GraphDataService } from '../services/graph-data.service';
import { GraphModel } from '../models/graph-model';

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
  graphData: GraphModel = new GraphModel;
  constructor(private historicalWeather: HistoricalWeatherServiceService, private graphDataService: GraphDataService) {
  }

  ngOnInit(): void {
    this.graphDataService.currentGraphData.subscribe(graphData => {
      this.graphData = graphData;
      if(this.graphData != null) {
        this.getWeather();
      }
    });
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
    this.historicalWeather.getWeather(this.graphData.startDate, this.graphData.endDate).subscribe(weather => {
      this.data = weather;
      this.averages = [];
      weather.forEach(element => {
        const date = new Date(element.date);
        if (this.graphData.temperatureScale == 'Fahrenheit'){
          element.averageTemp = element.averageTemp * 9.0 / 5.0 + 32;
        }
        this.averages.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), element.averageTemp]);
      });
      this.fillChart();
    });

  }

}
