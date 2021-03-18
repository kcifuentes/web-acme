import {getProfileTypes, isLoadingReducer, ProfileTypeState} from '@app/store/profile-type/profile-type.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getProfileTypeState =
  createFeatureSelector<ProfileTypeState>('profileTypes');

export const profileTypesSelector =
  createSelector(getProfileTypeState, getProfileTypes);

export const isLoading =
  createSelector(getProfileTypeState, isLoadingReducer);

