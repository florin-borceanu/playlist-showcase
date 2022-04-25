import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Playlist } from '@playlist/types';

@Component({
  selector: 'playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistListComponent {
  @Input() list: Playlist[];

  public playlistId(_: number, playlist: Playlist): string {
    return playlist.id;
  }
}
