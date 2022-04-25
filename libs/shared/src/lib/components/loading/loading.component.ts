import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  @Input() public get dotsNumber(): number {
    return this._dotsNumber;
  }
  public set dotsNumber(number: number) {
    if (number <= 1) {
      this._dotsNumber = 3;

      return;
    }

    this._dotsNumber = number;
  }
  private _dotsNumber = 3;
  @Input() public get isReverse(): boolean {
    return this._isReverse;
  }
  public set isReverse(isReverse: BooleanInput) {
    this._isReverse = coerceBooleanProperty(isReverse);
  }
  private _isReverse: boolean;

  public uniqueIdentifier(index: number): number {
    return index;
  }
}
