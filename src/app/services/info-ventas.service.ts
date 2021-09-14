import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoVentasService {
  info:any={};
  loaded=false;

  constructor(private http:HttpClient) {


   }

  getInfo(): Observable<any>{
    return this.http.get('../../assets/data/sales.json');

  }
}
