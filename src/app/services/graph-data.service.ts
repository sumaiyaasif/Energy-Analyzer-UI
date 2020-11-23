import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GraphModel } from '../models/graph-model';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  private graphData = new BehaviorSubject(null);
  currentGraphData = this.graphData.asObservable();

  constructor() { }

  updateGraph(graphData: GraphModel) {
    this.graphData.next(graphData)
  }
}
