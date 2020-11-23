import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker/datepicker-input-base';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GraphDataService } from '../services/graph-data.service';
import { GraphModel } from '../models/graph-model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit{
  startDate: string;
  endDate: string;
  message: string;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  
  constructor(public datepipe: DatePipe, private graphDataService: GraphDataService) { }

  ngOnInit(): void {
    this.graphDataService.currentGraphData.subscribe(message => this.message = message );
  }

  getDates() {
    const start = this.range.value.start as Date;
    const end = this.range.value.end as Date;
    this.startDate = this.datepipe.transform(start, 'MM/dd/yyyy');
    this.endDate = this.datepipe.transform(end, 'MM/dd/yyyy');
    const graph: GraphModel = {startDate: this.startDate, endDate: this.endDate}
    this.graphDataService.updateGraph(graph);
  }
}
