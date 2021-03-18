import {CityState, getCitiesReducer, isLoadingReducer} from '@app/store/city/city.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getCityState = createFeatureSelector<CityState>('cities');

export const getCities = createSelector(getCityState, getCitiesReducer);
export const isLoading = createSelector(getCityState, isLoadingReducer);
