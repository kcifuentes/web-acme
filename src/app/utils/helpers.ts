import {HttpErrorResponse} from '@angular/common/http';
import {ProfileTypeInterface} from '@app/store/profile-type';

export function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined {
  return value === null || value === undefined;
}

export function showErrorFromAPI(error: HttpErrorResponse): string {

  const errors = error.error.errors;

  let message = '';
  for (const property in errors) {
    if (errors.hasOwnProperty(property)) {
      if (errors[`${property}`].length > 0) {
        errors[`${property}`].map(err => {
          message += err + '<br>';
        });
      }
    }

  }

  return message;
}

export function pluck(array: any[], key: string) {
  return array.map((item: any) => item[key]);
}

export function getProfileTypeName(profileType: ProfileTypeInterface, pluralize: boolean = false) {
  if (isNullOrUndefined(profileType)) {
    return '';
  }

  let name: string;

  if (profileType.name === 'owner') {
    name = pluralize ? 'propietarios' : 'propietario';
  } else if (profileType.name === 'driver') {
    name = pluralize ? 'conductores' : 'conductor';
  }

  return name;
}
