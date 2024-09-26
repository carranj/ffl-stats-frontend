import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeasonData } from '../../types/season-data';
import ExportingModule from 'highcharts/modules/exporting';
import ExportDataModule from 'highcharts/modules/export-data';
import { ChartDataService } from 'src/app/services/chart-data.service';

ExportingModule(Highcharts);
ExportDataModule(Highcharts);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'], 
  encapsulation: ViewEncapsulation.None
})

export class LineChartComponent implements OnInit {
  @Input() title?:string;
  highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  chart: Highcharts.Chart | undefined;
  dataByWeek: number[][] = [];
  dataBySeason: SeasonData[] = [];
  weeks: string[] = [];
  seasons: string[] = [];
  managers: string[] = [];
  currentView: 'week' | 'season' = 'week';
  isDataLoaded: boolean = false;
  
  series: Highcharts.SeriesLineOptions[] = this.managers.map((manager, index) => ({
    type: 'line',
    name: manager,
    data: []
  }));

  constructor(private readonly chartDataService: ChartDataService) {}
  
  ngOnInit() {
    this.chartDataService.getLineChartData().subscribe(res => {
      this.dataByWeek = res.dataByWeek;
      this.dataBySeason = res.dataBySeason;
      this.weeks = res.weeks;
      this.seasons = res.dataBySeason.map((d: SeasonData) => d.season);
      this.managers = res.managers;
      this.isDataLoaded = true; 
      this.initializeChart();
    });

  }

  initializeChart(){
    const categories = this.currentView === 'week' ? this.weeks : this.seasons;
    const data = this.currentView === 'week' ? this.dataByWeek : this.dataBySeason.map(season => season.data);
    const series: Highcharts.SeriesOptionsType[] = this.managers.map((manager, index) => ({
      name: manager,
      data: data[index] || [], // Ensure there is data for the manager
      type: 'line' // Specify the type if needed
    }));

    this.chartOptions = {
      chart: {
        spacingBottom: 0,
        backgroundColor: '#2e2e2e'
      },
      series: series,
      title: {
        text: this.title,
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
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
        buttons: {
          contextButton: {
            menuItems: ['downloadJPEG', 'viewData', 'downloadCSV']
          }
        }
      },
      lang: {
        viewData: 'View as Table'
      }
    };
  }
}