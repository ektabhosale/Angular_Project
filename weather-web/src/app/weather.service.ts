import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url="http://api.openweathermap.org/data/2.5/weather";
url2="http://api.openweathermap.org/data/2.5/forecast/hourly";
apiKey="23ed133e6d922d0841815eb8563c3ce4";
  constructor(private http:HttpClient) { }


getWeatherDataByCoords(lat,lon){
  let params = new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','imperial')
  .set('appId',this.apiKey)

  return this.http.get(this.url,{params});

}
getWeatherDataByCity(city: string){
  let params = new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid',this.apiKey)

  return this.http.get(this.url,{params});

}

fiveDayForecaste(city:string){
  let params = new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid',this.apiKey)

  return this.http.get(this.url2,{params});

}
}

export class WeatherForcast {
  url="http://api.openweathermap.org/data/2.5/forecast/hourly";
  apiKey="23ed133e6d922d0841815eb8563c3ce4";
  constructor(private http:HttpClient) { }


getForcastDataByCoords(lat,lon){
  let params = new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','imperial')
  .set('appId',this.apiKey)

  return this.http.get(this.url,{params});

}

}

