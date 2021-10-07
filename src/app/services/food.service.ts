import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
foodURL:string='http://localhost:3000/food';
  constructor(private http:HttpClient) { }
  addFood(ingredients){
    return this.http.post<{result:any}>(this.foodURL,ingredients);
  }
}
