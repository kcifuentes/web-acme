import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '@app/services/token.service';
import {RoutesInterface} from '@app/store/initialData/interfaces/routes.interface';
import {getRoutes} from '@app/store/initialData/route.selectors';
import {State} from '@app/store/reducer';
import {isNullOrUndefined} from '@app/utils/helpers';
import {ROUTES_URL} from '@app/utils/routes.utils';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export interface RoutePropertiesInterface {
    name: string;
    value: any;
}

@Injectable({
    providedIn: 'root'
})
export class RouteService {
    routes$: Observable<RoutesInterface[]> = this.store.select(getRoutes).pipe();

    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
        private store: Store<State>) {
    }

    getRoutesFromApi(): Observable<any> {
        return this.http.get(ROUTES_URL, {
            headers: this.tokenService.getHeaders(false),
        });
    }

    getRoutesByName(name: string, properties?: RoutePropertiesInterface[]): string {
        let routeUri = '';

        this.routes$.subscribe((routes: RoutesInterface[]) => {
            const route = routes.filter((iRoute: RoutesInterface) => iRoute.name === name)[0];
            if (route) {
                if (!isNullOrUndefined(properties)) {
                    properties.forEach((param) => {
                        routeUri = this.extracted(route, param);
                    });
                } else {
                    routeUri = this.extracted(route);
                }
            }
        });

        return routeUri;
    }

    private extracted = (route: RoutesInterface, param?: RoutePropertiesInterface): string => {
        let replace: string = route.uri;
        if (!isNullOrUndefined(param)) {
            const exp = new RegExp('\{(' + param.name + '+?)\}', 'g');
            replace = route.uri.replace(exp, param.value).toString();
        }

        return `${environment.apiUrl}/${replace}`;
    };
}
