export const enum LoadingState {
    INIT = 'INIT',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
}

export interface Error {
    [key: string]: string[];
}

export interface HttpUnprocessableEntity {
    message: string;
    errors: Error;
}

export interface ErrorState {
    error: HttpUnprocessableEntity;
}

export type CallLoadingState = LoadingState | ErrorState;

export function getError(callLoadingState: CallLoadingState): Error | null {
    if ((callLoadingState as ErrorState).error.errors !== undefined) {
        return (callLoadingState as ErrorState).error.errors;
    }
    return null;
}