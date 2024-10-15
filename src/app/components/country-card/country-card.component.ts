import { Component, Input } from '@angular/core';
import { CountryProps } from '../../../@types';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html'
})
export class CountryCardComponent {

  @Input() country: CountryProps = {
    name: {
    common: "",
    official: "",
    },
    capital: [""],
    region: "",
    population: 0,
    flags: {
      png: ""
    }
  }
}
