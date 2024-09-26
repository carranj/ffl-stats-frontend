import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { HeadToHeadComponent } from './components/dashboard/head-to-head/head-to-head.component';
import { HeatMapComponent } from './charts/heat-map/heat-map.component';
import { TopStreaksComponent } from './components/dashboard/top-streaks/top-streaks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LineChartComponent,
    UserProfileComponent,
    HomeComponent,
    BarChartComponent,
    HeadToHeadComponent,
    HeatMapComponent,
    TopStreaksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
