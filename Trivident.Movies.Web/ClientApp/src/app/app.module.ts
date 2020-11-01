import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppStateReducerProvider, AppStateReducerToken, effects } from './core/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    StoreModule.forRoot(AppStateReducerToken),
    EffectsModule.forRoot([ ...effects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-NL' }, AppStateReducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
