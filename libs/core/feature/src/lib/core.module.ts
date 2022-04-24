import { LoginComponent, MainComponent } from './pages';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { CoreDataAccessModule } from '../../../data-access/src';

@NgModule({
  imports: [CommonModule, CoreDataAccessModule, CoreRoutingModule],
  declarations: [LoginComponent, MainComponent],
})
export class CoreFeatureModule {}
