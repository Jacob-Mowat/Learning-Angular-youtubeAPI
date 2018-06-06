import { OnInit } from '@angular/core';
import { Video } from './video';

export class Playlist implements OnInit {
  id: number;
  title: string;
  creator: string;
  videos: Video[];

  currentVideoPlaying: number;

  init() : void {
    this.currentVideoPlaying = 0;
  }

  ngOnInit() {
    this.init();
  }

  playNext() : void {
    if (this.currentVideoPlaying == this.videos.length) {
      this.currentVideoPlaying = 0;
    } else {
      this.currentVideoPlaying++;
    }
  }

  playPrev() : void {
    if (this.currentVideoPlaying == 0) {
      this.currentVideoPlaying = this.videos.length;
    } else {
      this.currentVideoPlaying--;
    }
  }
}
