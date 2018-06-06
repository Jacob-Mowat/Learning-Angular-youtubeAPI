import { Video } from './video';

export class Playlist {
  public id: number;
  public title: string;
  public creator: string;
  public videos: Video[];
}
