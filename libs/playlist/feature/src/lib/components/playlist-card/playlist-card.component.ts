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

  @HostBinding('style.background-image') public get backgroundImage(): string {
    return `url(${this.playlist?.artwork})`;
  }
}
