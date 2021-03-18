export enum ProfileActionTypes {
  GET_ALL_PROFILES_ATTEMPT = '[Profile] Attempt to get list Profiles from API',
  GET_ALL_PROFILES_SUCCESS = '[Profile] Get list of Profiles from API',
  CREATE_NEW_PROFILE_ATTEMPT = '[Profile] Attempt to create a new Profile in the API'
}

export class GetAllProfilesAttempt {
  readonly type = ProfileActionTypes.GET_ALL_PROFILES_ATTEMPT;

  constructor(payload: { profileTypeId: number }) {
  }
}

export class GetAllProfilesSuccess {
  readonly type = ProfileActionTypes.GET_ALL_PROFILES_SUCCESS;

  constructor(payload: { profileType: number }) {
  }
}

export class CreateNewProfileAttempt {
  readonly type = ProfileActionTypes.CREATE_NEW_PROFILE_ATTEMPT;

  constructor(payload: {}) {
  }
}


export type ProfileAction =
  GetAllProfilesAttempt |
  GetAllProfilesSuccess;
