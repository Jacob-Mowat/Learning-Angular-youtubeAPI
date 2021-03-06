import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { VideoviewComponent } from './videoview/videoview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaylistviewComponent } from './playlistview/playlistview.component';
import { NavigationviewComponent } from './navigationview/navigationview.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoviewComponent,
    DashboardComponent,
    PlaylistviewComponent,
    NavigationviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
