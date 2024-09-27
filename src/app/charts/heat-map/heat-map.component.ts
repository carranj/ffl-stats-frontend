import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_heatmap from 'highcharts/modules/heatmap';
import HC_exporting from 'highcharts/modules/exporting';

HC_heatmap(Highcharts);
HC_exporting(Highcharts);

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent {
  heatmapData = [
    { "x": 0, "y": 0, "value": 34.5 },
    { "x": 1, "y": 0, "value": 18.5 },
    { "x": 2, "y": 0, "value": 0.0 },
    { "x": 3, "y": 0, "value": 0.0 },
    { "x": 4, "y": 0, "value": 0.0 },
    { "x": 5, "y": 0, "value": 0.0 },
    { "x": 6, "y": 0, "value": 0.0 },
    { "x": 7, "y": 0, "value": 0.0 },
    { "x": 8, "y": 0, "value": null },
    { "x": 9, "y": 0, "value": null },
    { "x": 10, "y": 0, "value": null },
    { "x": 11, "y": 0, "value": null },
    { "x": 12, "y": 0, "value": null },
    { "x": 13, "y": 0, "value": null },
    
    { "x": 0, "y": 1, "value": 45.5 },
    { "x": 1, "y": 1, "value": 42.9 },
    { "x": 2, "y": 1, "value": 30.8 },
    { "x": 3, "y": 1, "value": 20.0 },
    { "x": 4, "y": 1, "value": 6.3 },
    { "x": 5, "y": 1, "value": 0.0 },
    { "x": 6, "y": 1, "value": 0.0 },
    { "x": 7, "y": 1, "value": 0.0 },
    { "x": 8, "y": 1, "value": 0.0 },
    { "x": 9, "y": 1, "value": 0.0 },
    { "x": 10, "y": 1, "value": null },
    { "x": 11, "y": 1, "value": null },
    { "x": 12, "y": 1, "value": null },
    { "x": 13, "y": 1, "value": null },

    { "x": 0, "y": 2, "value": null },
    { "x": 1, "y": 2, "value": 55.6, },
    { "x": 2, "y": 2, "value": 51.1 },
    { "x": 3, "y": 2, "value": 38.1 },
    { "x": 4, "y": 2, "value": 33.3 },
    { "x": 5, "y": 2, "value": 16.0 },
    { "x": 6, "y": 2, "value": 11.8 },
    { "x": 7, "y": 2, "value": 0.0 },
    { "x": 8, "y": 2, "value": 0.0 },
    { "x": 9, "y": 2, "value": 0.0 },
    { "x": 10, "y": 2, "value": 0.0 },
    { "x": 11, "y": 2, "value": 0.0 },
    { "x": 12, "y": 2, "value": 0.0 },
    { "x": 13, "y": 2, "value": null },

    { "x": 0, "y": 3, "value": null },
    { "x": 1, "y": 3, "value": null },
    { "x": 2, "y": 3, "value": 75.0 },
    { "x": 3, "y": 3, "value": 62.1 },
    { "x": 4, "y": 3, "value": 51.4 },
    { "x": 5, "y": 3, "value": 33.3 },
    { "x": 6, "y": 3, "value": 17.9 },
    { "x": 7, "y": 3, "value": 21.7 },
    { "x": 8, "y": 3, "value": 6.3 },
    { "x": 9, "y": 3, "value": 0.0 },
    { "x": 10, "y": 3, "value": 0.0 },
    { "x": 11, "y": 3, "value": 0.0 },
    { "x": 12, "y": 3, "value": 0.0 },
    { "x": 13, "y": 3, "value": 0.0 },

    { "x": 0, "y": 4, "value": null },
    { "x": 1, "y": 4, "value": null },
    { "x": 2, "y": 4, "value": null },
    { "x": 3, "y": 4, "value": 83.3 },
    { "x": 4, "y": 4, "value": 61.1 },
    { "x": 5, "y": 4, "value": 66.7 },
    { "x": 6, "y": 4, "value": 37.9 },
    { "x": 7, "y": 4, "value": 20.8 },
    { "x": 8, "y": 4, "value": 14.3 },
    { "x": 9, "y": 4, "value": 4.5 },
    { "x": 10, "y": 4, "value": 0.0 },
    { "x": 11, "y": 4, "value": 0.0 },
    { "x": 12, "y": 4, "value": 0.0 },
    { "x": 13, "y": 4, "value": 0.0 },

    { "x": 0, "y": 5, "value": null },
    { "x": 1, "y": 5, "value": null },
    { "x": 2, "y": 5, "value": null },
    { "x": 3, "y": 5, "value": null },
    { "x": 4, "y": 5, "value": 100.0 },
    { "x": 5, "y": 5, "value": 87.5 },
    { "x": 6, "y": 5, "value": 91.3 },
    { "x": 7, "y": 5, "value": 64.0 },
    { "x": 8, "y": 5, "value": 43.5 },
    { "x": 9, "y": 5, "value": 29.2 },
    { "x": 10, "y": 5, "value": 16.0 },
    { "x": 11, "y": 5, "value": 0.0 },
    { "x": 12, "y": 5, "value": 0.0 },
    { "x": 13, "y": 5, "value": 0.0 },

    { "x": 0, "y": 6, "value": null },
    { "x": 1, "y": 6, "value": null },
    { "x": 2, "y": 6, "value": null },
    { "x": 3, "y": 6, "value": null },
    { "x": 4, "y": 6, "value": null },
    { "x": 5, "y": 6, "value": 100.0 },
    { "x": 6, "y": 6, "value": 100.0 },
    { "x": 7, "y": 6, "value": 93.3 },
    { "x": 8, "y": 6, "value": 89.5 },
    { "x": 9, "y": 6, "value": 68.2 },
    { "x": 10, "y": 6, "value": 42.9 },
    { "x": 11, "y": 6, "value": 31.8 },
    { "x": 12, "y": 6, "value": 0.0 },
    { "x": 13, "y": 6, "value": 0.0 },

    { "x": 0, "y": 7, "value": null },
    { "x": 1, "y": 7, "value": null },
    { "x": 2, "y": 7, "value": null },
    { "x": 3, "y": 7, "value": null },
    { "x": 4, "y": 7, "value": null },
    { "x": 5, "y": 7, "value": null },
    { "x": 6, "y": 7, "value": 100.0 },
    { "x": 7, "y": 7, "value": 100.0 },
    { "x": 8, "y": 7, "value": 100.0 },
    { "x": 9, "y": 7, "value": 100.0 },
    { "x": 10, "y": 7, "value": 87.0 },
    { "x": 11, "y": 7, "value": 71.4 },
    { "x": 12, "y": 7, "value": 57.9 },
    { "x": 13, "y": 7, "value": 6.7 },

    { "x": 0, "y": 8, "value": null },
    { "x": 1, "y": 8, "value": null },
    { "x": 2, "y": 8, "value": null },
    { "x": 3, "y": 8, "value": null },
    { "x": 4, "y": 8, "value": null },
    { "x": 5, "y": 8, "value": null },
    { "x": 6, "y": 8, "value": null },
    { "x": 7, "y": 8, "value": 100.0 },
    { "x": 8, "y": 8, "value": null },
    { "x": 9, "y": 8, "value": 100.0 },
    { "x": 10, "y": 8, "value": 100.0 },
    { "x": 11, "y": 8, "value": 90.0 },
    { "x": 12, "y": 8, "value": 77.8 },
    { "x": 13, "y": 8, "value": 71.4 },

    { "x": 0, "y": 9, "value": null },
    { "x": 1, "y": 9, "value": null },
    { "x": 2, "y": 9, "value": null },
    { "x": 3, "y": 9, "value": null },
    { "x": 4, "y": 9, "value": null },
    { "x": 5, "y": 9, "value": null },
    { "x": 6, "y": 9, "value": null },
    { "x": 7, "y": 9, "value": null },
    { "x": 8, "y": 9, "value": 100.0 },
    { "x": 9, "y": 9, "value": 100.0 },
    { "x": 10, "y": 9, "value": 100.0 },
    { "x": 11, "y": 9, "value": 100.0 },
    { "x": 12, "y": 9, "value": 100.0 },
    { "x": 13, "y": 9, "value": 100.0 },

    { "x": 0, "y": 10, "value": null },
    { "x": 1, "y": 10, "value": null },
    { "x": 2, "y": 10, "value": null },
    { "x": 3, "y": 10, "value": null },
    { "x": 4, "y": 10, "value": null },
    { "x": 5, "y": 10, "value": null },
    { "x": 6, "y": 10, "value": null },
    { "x": 7, "y": 10, "value": null },
    { "x": 8, "y": 10, "value": null },
    { "x": 9, "y": 10, "value": null },
    { "x": 10, "y": 10, "value": 100.0 },
    { "x": 11, "y": 10, "value": 100.0 },
    { "x": 12, "y": 10, "value": 100.0 },
    { "x": 13, "y": 10, "value": 100.0 },

    { "x": 0, "y": 11, "value": null },
    { "x": 1, "y": 11, "value": null },
    { "x": 2, "y": 11, "value": null },
    { "x": 3, "y": 11, "value": null },
    { "x": 4, "y": 11, "value": null },
    { "x": 5, "y": 11, "value": null },
    { "x": 6, "y": 11, "value": null },
    { "x": 7, "y": 11, "value": null },
    { "x": 8, "y": 11, "value": null },
    { "x": 9, "y": 11, "value": null },
    { "x": 10, "y": 11, "value": null },
    { "x": 11, "y": 11, "value": null },
    { "x": 12, "y": 11, "value": 100.0 },
    { "x": 13, "y": 11, "value": 100.0 },

    { "x": 0, "y": 12, "value": null },
    { "x": 1, "y": 12, "value": null },
    { "x": 2, "y": 12, "value": null },
    { "x": 3, "y": 12, "value": null },
    { "x": 4, "y": 12, "value": null },
    { "x": 5, "y": 12, "value": null },
    { "x": 6, "y": 12, "value": null },
    { "x": 7, "y": 12, "value": null },
    { "x": 8, "y": 12, "value": null },
    { "x": 9, "y": 12, "value": null },
    { "x": 10, "y": 12, "value": null },
    { "x": 11, "y": 12, "value": null },
    { "x": 12, "y": 12, "value": null },
    { "x": 13, "y": 12, "value": 100.0 }
];


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'heatmap',
      plotBorderWidth: 1
    },
    title: {
      text: 'Playoff Odds'
    },
    xAxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7','Week 8','Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14']
    },
    yAxis: {
      categories: ['0', '1', '2', '3','4','5','6','7','8','9','10','11','12','13','14'],
      title:{
        text:"Wins"
      }
    },
    colorAxis: {
      min: 0,
      minColor: '#FF0000',
      maxColor: '#4BB543',
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 280
    },
    series: [{
      type: 'heatmap',
      name: 'Player performance',
      borderWidth: 1,
      data: this.heatmapData,
      dataLabels: {
        enabled: true,
        color: '#000000',
        formatter: function () {
            return this.point.value === null || this.point.value === undefined || isNaN(this.point.value) ? '' : this.point.value + '%';
        }
      },
      nullColor: 'transparent',
    }],
    tooltip: {
      formatter: function() {
          return `
              <strong>Week ${this.point.x}</strong><br>
              Wins ${this.point.y}<br>
              ${this.point.value}%`;
      }
  },
    credits:{
      enabled:false
    }
  };
}