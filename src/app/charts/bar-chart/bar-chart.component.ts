import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {
  @Input() data: any;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.updateChart();
    }
  }

  updateChart() {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Bar Chart'
      },
      xAxis: {
        categories: this.data.categories
      },
      yAxis: {
        title: {
          text: 'Points'
        }
      },
      series: this.data.series
    };

    Highcharts.chart('bar-chart-container', this.chartOptions);
  }
}
