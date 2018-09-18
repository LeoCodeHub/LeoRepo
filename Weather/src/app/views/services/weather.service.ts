import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class WeatherService {


  constructor(private http: Http) {}


  getWeather(city) {
  // const headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  //   const options = new RequestOptions({ headers: headers });
    return this.http.get(`https://www.codepiller.com/weatherapi/?command=search&keyword=${city}`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  viewWeatherReport(woeid) {
      // alert('OK' + woeid);
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // const options = new RequestOptions({ headers: headers });
    return this.http.get(`https://www.codepiller.com/weatherapi/?command=location&woeid=${woeid}`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  getSearch(title) {
    // alert(title);
    return this.http.get(`https://www.metaweather.com/api/location/search/?query=${title}`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
