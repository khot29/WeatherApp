import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { parameters } from '../../environment/environment';
import { Root } from '../interface/apiinterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient ) { }

  getweatherdata(cityname  :string) : Observable<Root>{
  return this.http.get<Root>(parameters.baseUrl, {
    headers: new HttpHeaders().set('key', parameters.apikey),
    params: new HttpParams().set('q', cityname).set('aqi', 'yes'),
  });


  }
}
