import {ProfileTypeInterface} from '@app/store/profile-type/interfaces/ProfileTypeInterface';

export enum ProfileTypeActionTypes {
  GET_ALL_PROFILE_TYPES = '[ProfileTypes] Attempt get all profile types from API',
  GET_ALL_PROFILE_TYPES_SUCCESS = '[ProfileTypes] Success get all profiles types from API',
}

export class GetAllProfileTypes {
  readonly type = ProfileTypeActionTypes.GET_ALL_PROFILE_TYPES;
}

export class GetAllProfileTypesSuccess {
  readonly type = ProfileTypeActionTypes.GET_ALL_PROFILE_TYPES_SUCCESS;

  constructor(public profileTypes: ProfileTypeInterface[]) {
  }
}

export type ProfileTypeActions =
  GetAllProfileTypes |
  GetAllProfileTypesSuccess;
