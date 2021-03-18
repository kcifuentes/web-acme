import {RoutesInterface} from '@app/store/initialData/interfaces/routes.interface';
import {RoutesAction, RoutesActionTypes} from '@app/store/initialData/routes.action';


export interface RouteState {
    data: RoutesInterface[];
}

export const initialState: RouteState = {
    data: []
};

export function routeReducer(state: RouteState = initialState, action: RoutesAction): RouteState {
    switch (action.type) {
        case RoutesActionTypes.GET_ROUTES:
            return {
                ...state,
            };
        case RoutesActionTypes.GET_ROUTES_SUCCESS:
            return {
                ...state,
                data: action.payload.routes
            };
        default: {
            return state;
        }
    }
}

export const routes = (state: RouteState) => state.data;
