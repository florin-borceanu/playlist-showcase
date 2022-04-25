import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { themeFactory, translateHttpLoaderFactory } from '@utils/factories';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationTitleService } from '@utils/services/application-title';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ThemeService } from '@utils/services/theme';
import { environment } from '../environments/environment';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(routerReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    StoreRouterConnectingModule.forRoot(),
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
