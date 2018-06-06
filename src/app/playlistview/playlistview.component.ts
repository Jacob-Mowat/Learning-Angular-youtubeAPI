import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Playlist } from '../playlist';
import { VideoviewComponent } from '../viewview/videoview.component';

@Component({
  selector: 'app-playlistview',
  templateUrl: './playlistview.component.html',
  styleUrls: ['./playlistview.component.css']
})
export class PlaylistviewComponent implements OnInit {
  public playlist: Playlist;
  public currentVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
