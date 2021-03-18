import {environment} from '../../environments/environment';

export const ROUTES_URL = `${environment.apiUrl}/v1/initial-data`;

export enum HttpErrors {
    UNAUTHORIZED = 401,
    UNPROCESSABLE_ENTITY = 422,
}

export enum ErrorMessages {
    VALIDATION_ACCOUNT_MESSAGE = 'El correo electrónico proporcionado aun no ha sido validado.',
}

export function descError(errors: any) {
    let errorString = '';

    errors.map((error) => {
        errorString += error.text + '<br>';
    });

    return errorString;
}
