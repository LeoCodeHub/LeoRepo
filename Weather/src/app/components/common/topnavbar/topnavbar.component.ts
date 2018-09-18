import { Component } from '@angular/core';
// import { Component,Inject,ViewChild,ElementRef,AfterViewInit} from '@angular/core';

import { smoothlyMenu } from '../../../app.helpers';
import {WeatherService} from '../../../views/services/weather.service';
import {ActivatedRoute, Router} from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {
  constructor(
    private weatherservice: WeatherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }
  // citySearch(title: string) {
  //   this.weatherservice.getSearch(title)
  //     // .subscribe(data => {
  //     //   // this.data =  data['msg'];
  //     //   if (data.success === false) {
  //     //     console.log('Not Gotta Data');
  //     //   } else {
  //     //     this.cities.push(data);
  //     //     // console.log(this.cities);
  //     //   }
  //     // });
  // }
}
