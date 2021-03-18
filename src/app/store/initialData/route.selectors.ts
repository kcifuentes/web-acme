import {routes, RouteState} from '@app/store/initialData/routes.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getRoutesState = createFeatureSelector<RouteState>('routes');
export const getRoutes = createSelector(getRoutesState, routes);
