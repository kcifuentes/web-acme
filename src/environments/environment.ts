import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const environment = {
  production: false,
  apiUrl: 'https://api.acme.san',
};

export const extModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  })
];
