import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryProps } from '../../@types';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private jsonUrl: string = "assets/data.json"

  constructor(private http: HttpClient) {}

  getCountries = (): Observable<any> => {
    return this.http.get<CountryProps[]>(this.jsonUrl)
  }
}
