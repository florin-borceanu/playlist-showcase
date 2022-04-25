import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { UserDetails } from '@core/types';

@Component({
  selector: 'core-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Input() user: UserDetails | null;
  @Output() public onLogout: EventEmitter<void> = new EventEmitter<void>();

  public logout(): void {
    this.onLogout.emit();
  }
}
