import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '@app/services/token.service';
import {RoutesInterface} from '@app/store/initialData/interfaces/routes.interface';
import {getRoutes} from '@app/store/initialData/route.selectors';
import {GetRoutesSuccess} from '@app/store/initialData/routes.action';
import {State} from '@app/store/reducer';
import {ROUTES_URL} from '@app/utils/routes.utils';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class RouteProvider {
    routes$: Observable<RoutesInterface[]> = this.store.select(getRoutes).pipe(delay(0));

    constructor(private httpClient: HttpClient,
                private store: Store<State>,
                private tokenService: TokenService
    ) {
    }

    load(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this.httpClient.get(ROUTES_URL, {
                headers: this.tokenService.getHeaders(false),
            }).subscribe((resp: RoutesInterface[]) => {
                this.store.dispatch(new GetRoutesSuccess({routes: resp}));
                resolve(true);
            });
        });
    }
}
