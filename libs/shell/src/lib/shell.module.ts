import { LoginComponent, MainComponent } from './pages';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { ShellRoutingModule } from './shell-routing.module';

export const shellRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, ShellRoutingModule],
  declarations: [LoginComponent, MainComponent],
})
export class ShellModule {}
