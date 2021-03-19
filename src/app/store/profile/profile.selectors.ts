import {getProfileData, isLoadingReducer, ProfileState} from '@app/store/profile/profile.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profiles');
export const isLoading = createSelector(getProfileState, isLoadingReducer);
export const profilesData = createSelector(getProfileState, getProfileData);
