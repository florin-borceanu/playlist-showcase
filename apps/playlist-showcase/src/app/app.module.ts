import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { themeFactory, translateHttpLoaderFactory } from '@utils/factories';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeService } from '@utils/services';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
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
export class AppModule {}
