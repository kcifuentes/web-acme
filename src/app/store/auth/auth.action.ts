import {UserLogin} from '@app/store/auth/interfaces';
import {AuthenticatedUserResponse} from '@app/store/auth/interfaces/AuthenticatedUserResponse';

export enum AuthActionTypes {

  AUTH_LOGIN = '[Auth] User login attempt',
  AUTH_SUCCESS = '[Auth] User login or registration successfully',

  AUTH_LOGOUT = '[Auth] User logout attempt',
  AUTH_LOGOUT_SUCCESS = '[Auth] User logout successfully',
}

export class AuthLogin {
  readonly type = AuthActionTypes.AUTH_LOGIN;

  constructor(public payload: UserLogin) {
  }
}

export class AuthSuccess {
  readonly type = AuthActionTypes.AUTH_SUCCESS;

  constructor(public payload: AuthenticatedUserResponse) {
  }
}

export class Logout {
  readonly type = AuthActionTypes.AUTH_LOGOUT;
}

export class LogoutSuccess {
  readonly type = AuthActionTypes.AUTH_LOGOUT_SUCCESS;
}

export type AuthAction =
  AuthLogin |
  AuthSuccess |
  Logout |
  LogoutSuccess;
