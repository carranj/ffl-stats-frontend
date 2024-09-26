import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  constructor(private http: HttpClient) {}

  getLineChartData(): Observable<any> {
    return this.http.get('assets/mock-data/fantasy-points-all-managers-in-a-season.json');
  }

  getBarChartData(): Observable<any> {
    return this.http.get('assets/mock-data/scores.json');
  }

  getWinLossStreaks(): Observable<any>{
    return this.http.get('assets/mock-data/top-streaks.json')
  }
}
