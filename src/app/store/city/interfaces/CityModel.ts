import {CityInterface} from '@app/store/city/interfaces/CityInterface';

export class CityModel {
  id: number;
  name: string;

  constructor(city: CityInterface) {
    this.id = city.id;
    this.name = city.name;
  }
}
