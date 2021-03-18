import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '@app/services/token.service';
import {RouteService} from '@app/store/initialData';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(
    private http: HttpClient,
    private routeService: RouteService,
    private tokenService: TokenService,
  ) {
  }

  getAllCities(): Observable<any> {
    const route = this.routeService.getRoutesByName('cities.get');
    return this.http.get(route, {headers: this.tokenService.getHeaders(false)});
  }
}
