import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataService } from '../../../services/chart-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-top-streaks',
  templateUrl: './top-streaks.component.html',
  styleUrls: ['./top-streaks.component.scss']
})
export class TopStreaksComponent implements OnInit {
  displayedColumns: string[] = ['name', 'winStreaksCount', 'lossStreaksCount', 'season'];
  dataSource = new MatTableDataSource<any>([]);
  itemsPerPageOptions: number[] = [5, 10, 25, 50];
  itemsPerPage: number = this.itemsPerPageOptions[0]; // Default to 5

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private chartDataService: ChartDataService) {}

  ngOnInit(): void {
    this.getTopStreaks();
  }

  getTopStreaks(): void {
    this.chartDataService.getWinLossStreaks().subscribe(
      (data: any[]) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator; // Set paginator
        this.dataSource.sort = this.sort; // Set sort
        this.paginator.pageSize = this.itemsPerPage; // Set initial page size
      },
      error => {
        console.error('Error fetching top streaks:', error);
      }
    );
  }

  onItemsPerPageChange(selectedValue: number): void {
    this.paginator.pageSize = selectedValue;
    this.dataSource.paginator = this.paginator; // Re-assign paginator
  }
}