import {BCryptServiceService} from '@app/services/bcrypt-service.service';
import {clearState, reducers, State} from '@app/store/reducer';
import {storageSync} from '@larscom/ngrx-store-storagesync';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {RoutesEffect} from "@app/store/initialData";
import {AuthEffect} from "@app/store/auth";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

export function encrypt(bCrypt: BCryptServiceService, data: string) {
    return bCrypt.encode(data);
}

export function decrypt(bCrypt: BCryptServiceService, data: string) {
    return bCrypt.decode(data);
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        if (!environment.production) {
            console.log('%cAction: ' + action.type, 'color:red; font-size:13px');
            console.log('State: ', state);
            console.log('-----------------------------');
        }
        return reducer(state, action);
    };
}

export function storageSyncReducer(reducer: ActionReducer<State>) {
    const metaReducer = storageSync<State>({
        features: [
            {
                stateKey: 'auth',
                excludeKeys: [],
                serialize: (featureState: Partial<State>) => encrypt(new BCryptServiceService(), JSON.stringify(featureState)),
                deserialize: (featureState: string) => JSON.parse(decrypt(new BCryptServiceService(), featureState))
            },
            {
                stateKey: 'routes',
                excludeKeys: [],
                serialize: (featureState: Partial<State>) => encrypt(new BCryptServiceService(), JSON.stringify(featureState)),
                deserialize: (featureState: string) => JSON.parse(decrypt(new BCryptServiceService(), featureState))
            }
        ],
        storageKeySerializer: (key: string) => `ghu_${key}`,
        storage: window.localStorage
    });

    return metaReducer(reducer);
}

export const metaReducers: MetaReducer[] = [debug, storageSyncReducer, clearState];

export const STORE_IMPORTS = [
  StoreModule.forRoot(reducers, {metaReducers}),
  EffectsModule.forRoot([
    RoutesEffect,
    AuthEffect,
  ]),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  })
];
