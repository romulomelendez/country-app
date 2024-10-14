import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryProps } from '../../../@types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{

  countries: CountryProps[] = []

  constructor(private countryService: CountryService){}

  ngOnInit(){
    this.countryService.getCountries().subscribe(country => this.countries = country)
  }
}
