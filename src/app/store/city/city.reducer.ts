import {CityAction, CityActionTypes} from '@app/store/city/city.action';
import {CityInterface} from '@app/store/city/interfaces/CityInterface';
import {CallLoadingState, LoadingState} from '@app/utils';

export interface CityState {
  data: CityInterface[];
  callLoadingState: CallLoadingState;
}

export const initialState: CityState = {
  data: [],
  callLoadingState: LoadingState.INIT
};

export function cityReducer(state: CityState = initialState, action: CityAction): CityState {
  switch (action.type) {
    case CityActionTypes.GET_ALL_CITIES: {
      return {
        ...state,
        callLoadingState: LoadingState.LOADING
      };
    }
    case CityActionTypes.GET_ALL_CITIES_SUCCESS: {
      return {
        ...state,
        data: action.response,
        callLoadingState: LoadingState.LOADED
      };
    }
    default: {
      return state;
    }
  }
}

export const isLoadingReducer = (state: CityState) => state.callLoadingState === LoadingState.LOADING;
export const getCitiesReducer = (state: CityState) => state.data;

