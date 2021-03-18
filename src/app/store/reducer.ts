import {cityReducer, CityState} from '@app/store/city';
import {documentTypeReducer, DocumentTypeState} from '@app/store/document-type/document-type.reducer';
import {routeReducer, RouteState} from '@app/store/initialData/routes.reducer';
import {initialState, profileTypeReducer, ProfileTypeState} from '@app/store/profile-type';
import {LoadingState} from '@app/utils/LoadingState';
import {ActionReducerMap} from '@ngrx/store';
import {AuthActionTypes, authReducer, AuthState} from './auth';

export interface State {
  auth: AuthState;
  routes: RouteState;
  cities: CityState;
  documentTypes: DocumentTypeState;
  profileTypes: ProfileTypeState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  routes: routeReducer,
  cities: cityReducer,
  documentTypes: documentTypeReducer,
  profileTypes: profileTypeReducer,
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
        profileTypes: initialState
      };
    }

    return reducer(state, action);
  };
}
