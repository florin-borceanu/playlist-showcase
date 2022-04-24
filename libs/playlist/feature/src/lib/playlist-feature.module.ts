import { CommonModule } from '@angular/common';
import { MainComponent } from './pages';
import { NgModule } from '@angular/core';
import { PlaylistDataAccessModule } from '@playlist/data-access';
import { PlaylistFeatureRoutingModule } from './playlist-feature-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PlaylistDataAccessModule,
    PlaylistFeatureRoutingModule,
  ],
})
export class PlaylistFeatureModule {}
