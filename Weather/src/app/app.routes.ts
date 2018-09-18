import {Routes} from "@angular/router";

import { WeatherComponent } from './views/weather/weather.component';
import {StarterViewComponent} from "./views/appviews/starterview.component";
// import {LoginComponent} from "./views/appviews/login.component";
import {SubWeatherComponent} from './views/sub-weather/sub-weather.component';
import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from './components/common/layouts/topNavigationlayout.component';

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'starterview', pathMatch: 'full'},


  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'sub-weather/:id', component: SubWeatherComponent}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'weather', component: WeatherComponent}
    ]
  },
  // {
  //   path: '', component: BlankLayoutComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //   ]
  // },

  // Handle all other routes
  {path: '**',  redirectTo: 'weather'}
];
