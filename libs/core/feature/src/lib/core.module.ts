import { LoginComponent, MainComponent } from './pages';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { CoreDataAccessModule } from '../../../data-access/src';
import { SharedModule } from 'libs/shared/src';
import { NavComponent } from './components';

@NgModule({
  declarations: [LoginComponent, MainComponent, NavComponent],
  imports: [
    CommonModule,
    CoreDataAccessModule,
    CoreRoutingModule,
    SharedModule,
  ],
})
export class CoreFeatureModule {}
