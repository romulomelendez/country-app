import { Component, OnInit } from '@angular/core'
import { CountryService } from '../../services'
import { CountryProps, CountryServiceResult } from '../../../@types'
import { CountryCardComponent } from "../../components/country-card/country-card.component"
import { BaseChartDirective } from 'ng2-charts'
import { ChartOptions, ChartData, ChartType } from 'chart.js'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryCardComponent, BaseChartDirective],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{

  public countriesByJson: CountryProps[] = []
  public countriesByApi: CountryProps[] = []

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: '#FFF'
        }
      },
      y: {
        ticks: {
          color: '#FFF'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFF'
        }
      }
    }
  }
  public barChartLabels: string[] = ['Asia', 'Americas', 'Antarctic', 'Europe', 'Africa', 'Oceania']
  public barChartType: ChartType = 'bar'
  public barChartLegend = true
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [{
      data: [],
      label: 'Population',
      backgroundColor: 'orange'
    }]
  }

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    const {
      asia,
      americas,
      antarctic,
      europe,
      africa,
      oceania,
      countriesByJson: jsonCountriesResult,
      countriesByApi: apiCountriesResult
    }: CountryServiceResult = this.countryService.handleChartsData()

    this.countriesByJson = jsonCountriesResult
    this.countriesByApi = apiCountriesResult
    this.barChartData.datasets[0].data = [
      asia,
      americas,
      antarctic,
      europe,
      africa,
      oceania
    ]
  }
}
