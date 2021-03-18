import {AuthAction, AuthActionTypes} from '@app/store/auth/auth.action';
import {IUser} from '@app/store/auth/interfaces/IUser';
import {CallLoadingState, LoadingState} from '@app/utils/LoadingState';

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  user?: IUser;
  callLoadingState: CallLoadingState;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  callLoadingState: LoadingState.INIT
};

export function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.AUTH_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        callLoadingState: LoadingState.LOADED
      };
    }
    default: {
      return state;
    }
  }
}

export const isAuthenticatedReducer = (state: AuthState) => state.isAuthenticated;
export const userReducer = (state: AuthState) => state.user;
export const isLoadingReducer = (state: AuthState) => state.callLoadingState === LoadingState.LOADING;
