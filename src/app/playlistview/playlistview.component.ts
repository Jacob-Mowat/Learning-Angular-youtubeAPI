import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Playlist } from '../playlist';
import { VideoviewComponent } from '../videoview/videoview.component';

import { Video } from '../video';

@Component({
  selector: 'app-playlistview',
  templateUrl: './playlistview.component.html',
  styleUrls: ['./playlistview.component.css']
})
export class PlaylistviewComponent implements OnInit {
  public playlist: Playlist;
  public currentVideoPlaying: Video;

  private _videosList: Video[];

  private _route: ActivatedRoute;
  private _router: Router;

  private _playlistid: string;
  private _videoid: string;

  constructor(router: Router, route: ActivatedRoute) {
    this._videosList = [
      {
        id: 0,
        title: "WHAT THE **** HAPPENED TO SONIC!?",
        videoUrl: "https://www.youtube.com/watch?v=jJI2qJmDLAQ",
        views: 1547712,
        likes: 190000,
        dislikes: 2200,
        creator: "PewDiePie",
        watchCode: "aVfZ8zgf3R0"
      },
      {
        id: 1,
        title: "THIS GAME IS HILARIOUS | Paradigm - Part 1",
        videoUrl: "https://www.youtube.com/watch?v=jJI2qJmDLAQ",
        views: 1547712,
        likes: 190000,
        dislikes: 2200,
        creator: "PewDiePie",
        watchCode: "D4gZCWVvdOY"
      },
      {
        id: 2,
        title: "She's angry because I made fun of her...",
        videoUrl: "https://www.youtube.com/watch?v=jJI2qJmDLAQ",
        views: 1547712,
        likes: 190000,
        dislikes: 2200,
        creator: "PewDiePie",
        watchCode: "CZkUNPBlJIQ"
      }
    ];

    this.playlist = {
      id: 0,
      title: "My Playlist",
      creator: "Me Ofcourse",
      videos: this._videosList
    };

    // routing stuff

    this._router = router;

    this._playlistid = route.snapshot.params['playlistid'];
    this._videoid = route.snapshot.params['videoid'];

    let playlist_test = '0';
    let video_test = this.playlist.videos[0].watchCode;

    if (route.snapshot.params['playlistid'] != playlist_test && route.snapshot.params['videoid'] != video_test) {
      this._router.navigateByUrl('/view_playlist/'+playlist_test+'/'+video_test);
    }
  }

  ngOnInit() {
  }

  // playNext() : void {
  //   if (this.currentVideoPlaying.id === this.playlist.videos.length - 1) {
  //     this.currentVideoPlaying = 0;
  //   } else {
  //     this.currentVideoPlaying++;
  //   }
  // }

  // playPrev() : void {
  //   if (this.currentVideoPlaying === 0) {
  //     this.currentVideoPlaying.id = this.playlist.videos.length-1;
  //   } else {
  //     this.currentVideoPlaying--;
  //   }
  // }

  addVideo(id: string) : void {
    if(this.playlist.videos['watchCode'].indexOf(id) !== -1) {
      return; //  Video already in playlist ( accounted by watchCode )
    } else {
      this.playlist.videos.push({
        id: this.playlist.videos[this.playlist.videos.length-1].id + 1,
        title: "New Video Added",
        videoUrl: "https://www.youtube.com/watch?v="+id,
        views: 999999,
        likes: 1,
        dislikes: 1,
        creator: "Creator(Blank)",
        watchCode: id
      })
    }
  }

  getCurrentVideoPlaying() : number {
    return +this.currentVideoPlaying;
  }

}
