import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WeatherService} from '../services/weather.service';
import {IWeather} from '../services/weather';

// @ts-ignore
@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities: IWeather[] = [];

   citiesWeather: string[] = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
    constructor(
    private weatherservice: WeatherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      //console.log(this.citiesWeather[0]);
      for (let i = 0; i < this.citiesWeather.length; i++) {
        this.getWeatherlist(this.citiesWeather[i]);
      }
      console.log(this.cities);
  }

  getWeatherlist(city) {
    this.weatherservice.getWeather(city)
      .subscribe(data => {
        // this.data =  data['msg'];
        if (data.success === false) {
          console.log('Not Gotta Data');
        } else {
          this.cities.push(data);
          // console.log(this.cities);
        }
      });
  }

  Weather_Details(woeid): void {
    // alert(woeid);
    this.router.navigate([`/sub-weather/${woeid}`]);
  }

  citySearch(title: string) {
    this.cities = [];
      if(title != null) {
        this.weatherservice.getSearch(title)
          .subscribe(data => {
            // this.data =  data['msg'];
            if (data.success === false) {
              console.log('Not Gotta Data');
            } else {
              this.cities.push(data);
              // console.log(this.cities);
            }
          });
      }else {
        for (let i = 0; i < this.citiesWeather.length; i++) {
          this.getWeatherlist(this.citiesWeather[i]);
        }
      }
  }
}
