import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeSelectorComponent } from './components';

@NgModule({
  declarations: [ThemeSelectorComponent],
  imports: [CommonModule],
  exports: [ThemeSelectorComponent],
})
export class SharedModule {}
