import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const environment = {
  production: false,
  apiUrl: 'https://api.acme.san',
  extModules: [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ]
};
