import {ProfileTypeInterface} from '@app/store/profile-type/interfaces/ProfileTypeInterface';
import {ProfileTypeActions, ProfileTypeActionTypes} from '@app/store/profile-type/profile-type.action';
import {CallLoadingState, LoadingState} from '@app/utils';

export interface ProfileTypeState {
  profileTypes: ProfileTypeInterface[];
  callLoadingState: CallLoadingState;
}

export const initialState: ProfileTypeState = {
  profileTypes: [],
  callLoadingState: LoadingState.INIT
};

export function profileTypeReducer(state: ProfileTypeState = initialState, action: ProfileTypeActions) {
  switch (action.type) {
    case ProfileTypeActionTypes.GET_ALL_PROFILE_TYPES: {
      return {
        ...state,
        callLoadingState: LoadingState.LOADING
      };
    }
    case ProfileTypeActionTypes.GET_ALL_PROFILE_TYPES_SUCCESS: {
      return {
        ...state,
        profileTypes: action.profileTypes,
        callLoadingState: LoadingState.INIT
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}

export const getProfileTypes = (state: ProfileTypeState) => state.profileTypes;
export const isLoadingReducer = (state: ProfileTypeState) => state.callLoadingState === LoadingState.LOADING;

