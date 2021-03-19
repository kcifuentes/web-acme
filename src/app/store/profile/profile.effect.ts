import {Injectable} from '@angular/core';
import {ProfileInterface} from '@app/store/profile/interfaces/profile.interface';
import {
  GetAllProfiles,
  GetAllProfilesSuccess,
  ProfileActionTypes,
  SaveProfile,
  SaveProfileSuccess
} from '@app/store/profile/profile.action';
import {ProfileService} from '@app/store/profile/profile.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ProfileEffect {
  SaveProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.SAVE_PROFILE),
    map((action: SaveProfile) => action.payload),
    mergeMap((payload: ProfileInterface) => {
      return this.profileService.saveProfile(payload).pipe(
        mergeMap((response: any) => {
          return [
            new SaveProfileSuccess(response),
          ];
        })
      );
    })
  ));

  GetAllProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActionTypes.GET_ALL_PROFILES),
    map((action: GetAllProfiles) => action.payload),
    mergeMap((payload: { profileTypeId: number }) => {
      return this.profileService.getAllProfiles(payload).pipe(
        mergeMap((response: any) => {
          return [
            new GetAllProfilesSuccess(response),
          ];
        })
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {
  }
}
