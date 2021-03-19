import {ProfileInterface} from '@app/store/profile/interfaces/profile.interface';

export enum ProfileActionTypes {
  SAVE_PROFILE = '[Profile] Attempt to save profile information in the API',
  SAVE_PROFILE_SUCCESS = '[Profile] Save profile information successfully',

  GET_ALL_PROFILES = '[Profile] Attempt to get list Profiles from API',
  GET_ALL_PROFILES_SUCCESS = '[Profile] Get list of Profiles from API',
}

export class SaveProfile {
  readonly type = ProfileActionTypes.SAVE_PROFILE;

  constructor(public payload: ProfileInterface) {
  }
}

export class SaveProfileSuccess {
  readonly type = ProfileActionTypes.SAVE_PROFILE_SUCCESS;

  constructor(public response: ProfileInterface) {
  }
}

export class GetAllProfiles {
  readonly type = ProfileActionTypes.GET_ALL_PROFILES;

  constructor(public payload: { profileTypeId: number }) {
  }
}

export class GetAllProfilesSuccess {
  readonly type = ProfileActionTypes.GET_ALL_PROFILES_SUCCESS;

  constructor(public response: ProfileInterface[]) {
  }
}


export type ProfileAction =
  SaveProfile |
  SaveProfileSuccess |
  GetAllProfiles |
  GetAllProfilesSuccess;
