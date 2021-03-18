import {Injectable} from '@angular/core';
import {CityActionTypes, GetAllCities, GetAllCitiesSuccess} from '@app/store/city/city.action';
import {CityService} from '@app/store/city/city.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class CityEffect {
  GetAllCities$ = createEffect(() => this.actions$.pipe(
    ofType(CityActionTypes.GET_ALL_CITIES),
    map((action: GetAllCities) => action),
    mergeMap(() => {
      return this.cityService.getAllCities().pipe(
        mergeMap((response: any) => {
          return [
            new GetAllCitiesSuccess(response)
          ];
        })
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private cityService: CityService
  ) {
  }
}
