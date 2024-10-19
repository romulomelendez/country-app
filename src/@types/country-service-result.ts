import { CountryProps } from "./country-props"

export type CountryServiceResult = {
  asia: number,
  americas: number,
  europe: number,
  antarctic: number,
  africa: number,
  oceania: number,
  countriesByJson: CountryProps[],
  countriesByApi: CountryProps[],
}
