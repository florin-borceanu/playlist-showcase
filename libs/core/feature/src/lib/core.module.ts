import { LoginComponent, MainComponent } from './pages';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { CoreDataAccessModule } from '../../../data-access/src';
import { SharedModule } from 'libs/shared/src';

@NgModule({
  imports: [
    CommonModule,
    CoreDataAccessModule,
    CoreRoutingModule,
    SharedModule,
  ],
  declarations: [LoginComponent, MainComponent],
})
export class CoreFeatureModule {}
