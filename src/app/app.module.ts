import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { InputsComponent } from './inputs/inputs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { GraphDataService } from './services/graph-data.service';
import { HistoricalWeatherServiceService } from './services/historical-weather-service.service';
import { EnergyUsageServiceService } from './services/energy-usage-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [
    DatePipe,
    GraphDataService,
    HistoricalWeatherServiceService,
    EnergyUsageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
