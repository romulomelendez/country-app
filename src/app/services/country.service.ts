import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CountryProps } from '../../@types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(private http: HttpClient) {}

  getCountriesByJson = (): Observable<CountryProps[]> => {
    return this.http.get<CountryProps[]>(environment.localJsonApiUrl)
  }

  getCountriesByApi = (): Observable<CountryProps[]> => {
    return this.http.get<any[]>(environment.apiUrl).pipe(
      map(countries =>
        countries.slice(0, 10).map(country => ({
          name: {
            common: country.name.common,
            official: country.name.official
          },
          capital: country.capital,
          region: country.region,
          population: country.population,
          flags: {
            png: country.flags.png
          }
      })))
    )
  }
}
