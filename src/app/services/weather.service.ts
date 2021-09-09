import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL : string ='http://localhost:3000/weathers'

  constructor(private http:HttpClient) { }

  addlocation(town){
    return this.http.post<{result:any}>(this.weatherURL,town)
  }

  getWeather(){
    return this.http.get<{result:any}>(this.weatherURL);
  }
}
