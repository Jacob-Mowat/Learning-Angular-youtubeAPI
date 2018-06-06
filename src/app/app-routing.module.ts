import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoviewComponent } from './videoview/videoview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaylistviewComponent } from './playlistview/playlistview.component';


const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view_video/:videoid', component: VideoviewComponent },
  { path: 'view_playlist/:playlistid/:videoid', component: PlaylistviewComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
