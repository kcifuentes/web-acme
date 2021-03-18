import * as authReducer from '@app/store/auth/auth.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getAuthState =
  createFeatureSelector<authReducer.AuthState>('auth');

export const isAuthenticated =
  createSelector(getAuthState, authReducer.isAuthenticatedReducer);

export const isLoading =
  createSelector(getAuthState, authReducer.isLoadingReducer);

export const user =
  createSelector(getAuthState, authReducer.userReducer);
