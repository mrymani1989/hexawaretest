
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';

/* Services */
import { AuthService } from './shared/service/auth.service';
import { AuthTokenService } from './shared/service/auth-token.service';
import { DataService } from './shared/service/data.service';
import { ErrorInterceptor } from './shared/http-interceptor/error-interceptor';

/* Routing Module */
import { AppRoutingModule } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    DataService,
    AuthTokenService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
