import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeriesOptionsType } from 'highcharts';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Properly defined and initialized
  private jsonDataUrl = 'assets/mock-data/fantasy-points-all-managers-in-a-season.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    this.http.get(this.jsonDataUrl).subscribe((data: any) => {
      this.initializeChart(data);
    });
  }

  initializeChart(data: any): void {
    // Ensure data is processed correctly
    const seriesData: SeriesOptionsType[] = data.managers.map((manager: string, index: number) => ({
      name: manager,
      data: data.data[index]
    }));
  
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: '#2e2e2e'
      },
      title: {
        text: 'Fantasy Points Over the Season',
        style: {
          color: '#ffffff'
        }
      },
      xAxis: {
        categories: data.weeks,
        labels: {
          style: {
            color: '#ffffff'
          }
        },
        lineColor: '#ffffff',
        tickColor: '#ffffff'
      },
      yAxis: {
        title: {
          text: 'Points',
          style: {
            color: '#ffffff'
          }
        },
        labels: {
          style: {
            color: '#ffffff'
          }
        },
        lineColor: '#ffffff',
        tickColor: '#ffffff'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        backgroundColor: '#2e2e2e',
        borderColor: '#444444',
        itemStyle: {
          color: '#ffffff'
        },
        itemHoverStyle: {
          color: '#ffcc00'
        },
        itemHiddenStyle: {
          color: '#888888'
        },
        title: {
          style: {
            color: '#ffffff'
          }
        }
      },
      series: seriesData,
      credits: {
        enabled: false
      }
    };
  }
}