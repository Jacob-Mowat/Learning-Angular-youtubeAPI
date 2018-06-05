import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoviewComponent } from './videoview/videoview.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view_video/:id', component: VideoviewComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
