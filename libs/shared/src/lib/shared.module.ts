import {
  LoadingComponent,
  ThemeSelectorComponent,
  UserDetailsComponent,
} from './components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

const declarations = [
  LoadingComponent,
  ThemeSelectorComponent,
  UserDetailsComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations, TranslateModule],
})
export class SharedModule {}
