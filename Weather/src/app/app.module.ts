import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';

// App views

import {AppviewsModule} from './views/appviews/appviews.module';
import {WeatherService} from './views/services/weather.service';
// App modules/components
import {LayoutsModule} from './components/common/layouts/layouts.module';
import { WeatherComponent } from './views/weather/weather.component';
import { SubWeatherComponent } from './views/sub-weather/sub-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SubWeatherComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    LayoutsModule,
    AppviewsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
