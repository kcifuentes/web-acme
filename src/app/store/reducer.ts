import {routeReducer, RouteState} from '@app/store/initialData/routes.reducer';
import {LoadingState} from '@app/utils/LoadingState';
import {ActionReducerMap} from '@ngrx/store';
import {AuthActionTypes, authReducer, AuthState} from './auth';

export interface State {
    auth: AuthState;
    routes: RouteState;
}

export const reducers: ActionReducerMap<State> = {
    auth: authReducer,
    routes: routeReducer,
};

export function clearState(reducer) {
    return (state: State, action) => {
        if (action.type === AuthActionTypes.AUTH_LOGOUT_SUCCESS) {
            state = {
                ...state,
                auth: {
                    isAuthenticated: false,
                    callLoadingState: LoadingState.INIT
                },
            };
        }

        return reducer(state, action);
    };
}
