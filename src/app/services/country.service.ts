import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { CountryProps, CountryServiceResult } from '../../@types'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  public countriesByJson: CountryProps[] = []
  public countriesByApi: CountryProps[] = []

  constructor(private http: HttpClient) {}

  getPopulationSummedArr = (label: string): number => {

    const jsonSummedPopulationData = this.countriesByJson
      .filter(({ region }) => region === label)
      .reduce((total, { population }) => total + population, 0)

      const apiSummedPopulationData = this.countriesByApi
      .filter(({ region }) => region === label)
      .reduce((total, { population }) => total + population, 0)

    return jsonSummedPopulationData + apiSummedPopulationData
  }

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

  handleChartsData = (): CountryServiceResult => {

    this.getCountriesByJson().subscribe(jsonCountry => this.countriesByJson = jsonCountry)
    this.getCountriesByApi().subscribe(apiCountry => this.countriesByApi = apiCountry)

    return {
      asia: this.getPopulationSummedArr('Asia'),
      americas: this.getPopulationSummedArr('Americas'),
      africa: this.getPopulationSummedArr('Africa'),
      europe: this.getPopulationSummedArr('Europe'),
      antarctic: this.getPopulationSummedArr('Antarctic'),
      oceania: this.getPopulationSummedArr('Oceania'),
      countriesByJson: this.countriesByJson,
      countriesByApi: this.countriesByApi
    }
  }
}
