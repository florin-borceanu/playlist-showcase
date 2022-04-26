import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Playlist } from '@playlist/types';

@Component({
  selector: 'playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistCardComponent {
  @Input() playlist: Playlist;

  @HostBinding('style.background-color') public get colorByText(): string {
    let hash = 0;

    for (let i = 0; i < this.playlist?.name.length; i++) {
      hash = this.playlist?.name.charCodeAt(i) + ((hash << 5) - hash);
    }

    let result = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      result += ('00' + value.toString(16)).substr(-2);
    }

    return result;
  }
}
