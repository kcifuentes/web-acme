import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '@app/services/token.service';
import {AuthActionTypes, AuthSuccess} from '@app/store/auth/auth.action';
import {AuthService} from '@app/store/auth/auth.service';
import {AuthenticatedUserResponse} from '@app/store/auth/interfaces/AuthenticatedUserResponse';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class AuthEffect {
  // TODO: Make Auth Login When finis the functionality

  AuthSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.AUTH_SUCCESS),
    map((action: AuthSuccess) => action.payload),
    mergeMap((payload: AuthenticatedUserResponse) => {
      this.tokenService.setToken({
        token: payload.token,
      });

      if (isNotNullOrUndefined(payload.user)) {
        this.router.navigate(['/']).then();
      }
      return [];
    })
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
  }
}
