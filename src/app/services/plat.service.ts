import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platURL: string = 'http://localhost:3000/plats';
  constructor(private http: HttpClient) { }
  getAllPlats() {
    return this.http.get<{ allPlats: any }>(this.platURL);
  }
  getPlatById(id) {

    return this.http.get<{ plat: any }>(`${this.platURL}/${id}`);

  }
  deletePlat(id) {
    return this.http.delete<{message:string}>(`${this.platURL}/${id}`);


  }
  addPlat(plat,image:File) {
    let formData = new FormData();
    formData.append('image',image);
    formData.append('name',plat.name);
    formData.append('description',plat.description);
    formData.append('price',plat.price);


    return this.http.post<{message:string}>(this.platURL, formData);


  }
  updatePlat(plat) {
    return this.http.put<{message:string}>(`${this.platURL}/${plat._id}`, plat);


  }



}
