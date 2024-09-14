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
import { BarChartComponent } from './charts/bar-chart/bar-chart.component'; // Import HighchartsChartModule


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LineChartComponent,
    UserProfileComponent,
    HomeComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
