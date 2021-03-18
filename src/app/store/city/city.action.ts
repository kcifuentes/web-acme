import {CityInterface} from '@app/store/city/interfaces/CityInterface';

export enum CityActionTypes {
  GET_ALL_CITIES = '[Cities] Attempt to get list Cities from API',
  GET_ALL_CITIES_SUCCESS = '[Cities] Get list Cities from API',
}

export class GetAllCities {
  readonly type = CityActionTypes.GET_ALL_CITIES;
}

export class GetAllCitiesSuccess {
  readonly type = CityActionTypes.GET_ALL_CITIES_SUCCESS;

  constructor(public response: CityInterface[]) {
  }
}

export type CityAction =
  GetAllCities |
  GetAllCitiesSuccess;
