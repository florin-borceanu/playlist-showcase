import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ApplicationTitleService, ThemeService } from '@utils/services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { themeFactory, translateHttpLoaderFactory } from '@utils/factories';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en_US',
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: themeFactory,
      deps: [ThemeService],
      multi: true,
    },
  ],
})
export class AppModule {
  constructor(public applicationTitleService: ApplicationTitleService) {}
}
