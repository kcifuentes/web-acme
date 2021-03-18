import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '@app/services/token.service';
import {GetAllProfilesSuccess} from '@app/store/profile';
import {GetAllProfileTypesSuccess, ProfileTypeActionTypes} from '@app/store/profile-type/profile-type.action';
import {ProfileTypeService} from '@app/store/profile-type/profile-type.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ProfileTypeEffect {
  GetAllProfileTypes$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileTypeActionTypes.GET_ALL_PROFILE_TYPES),
    map((action: GetAllProfilesSuccess) => {
    }),
    mergeMap(() => {
      return this.profileTypeService.getAllProfileTypes().pipe(
        mergeMap((response: any) => {
          console.log(response);
          return [
            new GetAllProfileTypesSuccess(response)
          ];
        })
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private profileTypeService: ProfileTypeService,
    private tokenService: TokenService,
    private router: Router
  ) {
  }
}
