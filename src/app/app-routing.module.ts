import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeadToHeadComponent } from './components/dashboard/head-to-head/head-to-head.component';
import { TopStreaksComponent } from './components/dashboard/top-streaks/top-streaks.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: UserProfileComponent },
  {
    path: 'statistics',
    component: DashboardComponent,
    children: [
      {
        path: 'head-to-head',
        component: HeadToHeadComponent
      },
      {
        path: 'streaks',
        component: TopStreaksComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }