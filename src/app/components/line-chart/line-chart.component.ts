import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { SeasonData } from '../../types/season-data';
import ExportingModule from 'highcharts/modules/exporting';
import ExportDataModule from 'highcharts/modules/export-data';

ExportingModule(Highcharts);
ExportDataModule(Highcharts);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  private jsonDataUrl = 'assets/mock-data/fantasy-points-all-managers-in-a-season.json';
  chart: Highcharts.Chart | undefined;
  dataByWeek: number[][] = []; // Initialize with empty array
  dataBySeason: SeasonData[] = []; // Initialize with empty array
  weeks: string[] = []; // Initialize with empty array
  seasons: string[] = []; // Initialize with empty array
  managers: string[] = []; // Initialize with empty array
  currentView: 'week' | 'season' = 'week';
  isDataLoaded: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.jsonDataUrl).subscribe((data: any) => {
      this.dataByWeek = data.dataByWeek;
      this.dataBySeason = data.dataBySeason;
      this.weeks = data.weeks;
      this.seasons = data.dataBySeason.map((d: SeasonData) => d.season);
      this.managers = data.managers;
      this.isDataLoaded = true; 
      this.updateChart();
    });
  }

  updateChart() {
    if (!this.isDataLoaded) return; 
    const categories = this.currentView === 'week' ? this.weeks : this.seasons;
    const data = this.currentView === 'week' ? this.dataByWeek : this.dataBySeason.map(season => season.data);

    // Create a series for each manager
    const series: Highcharts.SeriesOptionsType[] = this.managers.map((manager, index) => ({
      name: manager,
      data: data[index] || [], // Ensure there is data for the manager
      type: 'line' // Specify the type if needed
    }));

    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: '#2e2e2e'
      },
      title: {
        text: this.currentView === 'week' ? 'Weekly Data' : 'Seasonal Data',
        style: {
          color: '#ffffff'
        }
      },
      xAxis: {
        categories: categories,
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
      series: series,
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,  // Enable exporting
        buttons: {
          contextButton: {
            menuItems: ['downloadJPEG', 'viewData', 'downloadCSV']  // Enable exporting as JPEG, viewing data as table, and exporting CSV
          }
        }
      },
      lang: {
        viewData: 'View as Table'
      }
    };

    // Initialize the chart
    this.chart = Highcharts.chart('container', this.chartOptions);
  }

  toggleView(view: 'week' | 'season') {
    this.currentView = view;
    this.updateChart();
  }
}