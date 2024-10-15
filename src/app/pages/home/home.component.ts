import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryProps } from '../../../@types';
import { CountryCardComponent } from "../../components/country-card/country-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryCardComponent],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{

  countriesByJson: CountryProps[] = []
  countriesByApi: CountryProps[] = []

  constructor(private countryService: CountryService){}

  ngOnInit(){
    this.countryService.getCountriesByJson().subscribe(jsonCountry => this.countriesByJson = jsonCountry)
    this.countryService.getCountriesByApi().subscribe(apiCountry => this.countriesByApi = apiCountry)
  }
}
