import * as fromAuthentication from './+state/authentication/authentication.reducers';
import { AuthenticationEffects } from './+state/authentication/authentication.effects';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthenticationEffects]),
    StoreModule.forFeature(
      fromAuthentication.authenticationFeatureKey,
      fromAuthentication.reducer
    ),
  ],
})
export class CoreDataAccessModule {}
