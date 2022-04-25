import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserDetails } from '@core/types';

@Component({
  selector: 'shared-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  @Input() user: UserDetails;
}
