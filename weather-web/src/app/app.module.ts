import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { TodayComponent } from './today/today.component';
import { from } from 'rxjs';
import { ForecastComponent } from './forecast/forecast.component';

import { NgxGooglePlaceAutocompleteDirective, NgxGooglePlaceAutocompleteModule } from 'ngx-google-place-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    ForecastComponent,

    // NgxGooglePlaceAutocompleteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,NgxGooglePlaceAutocompleteModule
    // GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
