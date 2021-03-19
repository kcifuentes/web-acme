import {ProfileInterface} from '@app/store/profile/interfaces/profile.interface';
import {ProfileAction, ProfileActionTypes} from '@app/store/profile/profile.action';
import {CallLoadingState, LoadingState} from '@app/utils';

export interface ProfileState {
  data: ProfileInterface[];
  callLoadingState: CallLoadingState;
}

export const initialState: ProfileState = {
  data: [],
  callLoadingState: LoadingState.INIT
};

export function profileReducer(state: ProfileState = initialState, action: ProfileAction): ProfileState {
  switch (action.type) {
    case ProfileActionTypes.SAVE_PROFILE: {
      return {
        ...state,
        callLoadingState: LoadingState.LOADING
      };
    }
    case ProfileActionTypes.SAVE_PROFILE_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.response],
        callLoadingState: LoadingState.LOADED,
      };
    }
    case ProfileActionTypes.GET_ALL_PROFILES: {
      return {
        ...state,
        callLoadingState: LoadingState.LOADING
      };
    }
    case ProfileActionTypes.GET_ALL_PROFILES_SUCCESS: {
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

export const isLoadingReducer = (state: ProfileState) => state.callLoadingState === LoadingState.LOADING;
export const getProfileData = (state: ProfileState) => state.data;
