import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [MainComponent],
})
export class DashboardModule {}
