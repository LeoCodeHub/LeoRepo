import { Component, OnInit, OnDestroy } from '@angular/core';
import { SWeather} from '../services/subweather';
import { Subscription } from 'rxjs/Subscription';
// import {AuthService} from '../user/auth.service';
import {WeatherService} from '../services/weather.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'sub-weather',
  templateUrl: './sub-weather.component.html',
  styleUrls: ['./sub-weather.component.css']
})

export class SubWeatherComponent implements OnInit {
  // foundBooks: any = [];
    weather: SWeather;
    private sub: Subscription;
  constructor(
    private weather_service: WeatherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const woeid = params['id'];
        this.viewWeather(woeid);
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  viewWeather(woeid) {
    // alert('ok' + id);
    this.weather_service.viewWeatherReport(woeid).subscribe(data => {

      if (data === false) {
        console.log('Not Gotta Data');
      } else {
        this.weather = data;
        // console.log(this.weather);
      }
    });

  }


}
