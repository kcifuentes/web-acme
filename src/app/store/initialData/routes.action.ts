import {RoutesInterface} from '@app/store/initialData/interfaces/routes.interface';

export enum RoutesActionTypes {
  GET_ROUTES = '[ROUTES] Get all Routes from API',
  GET_ROUTES_SUCCESS = '[ROUTES] Get all routes from API success',
}

export class GetRoutes {
  readonly type = RoutesActionTypes.GET_ROUTES;

  constructor() {
  }
}

export class GetRoutesSuccess {
  readonly type = RoutesActionTypes.GET_ROUTES_SUCCESS;

  constructor(public payload: { routes: RoutesInterface[] }) {
  }
}

export type RoutesAction = GetRoutes | GetRoutesSuccess;
