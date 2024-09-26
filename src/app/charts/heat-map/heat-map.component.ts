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
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'heatmap',
      plotBorderWidth: 1
    },
    title: {
      text: 'Fantasy Football Heatmap'
    },
    xAxis: {
      categories: ['User1', 'User2', 'User3', 'User4']
    },
    yAxis: {
      categories: ['Opponent 1', 'Opponent 2', 'Opponent 3', 'Opponent 4'],
      title: {
        text: 'Weeks'
      }
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: '#FF0000'
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
      data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [1, 0, 67], [1, 1, 92], [1, 2, 86], [1, 3, 80], [2, 0, 48], [2, 1, 98], [2, 2, 35], [2, 3, 90], [3, 0, 23], [3, 1, 64], [3, 2, 45], [3, 3, 70]],
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }],
    credits:{
      enabled:false
    }
  };
}