import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '@app/services/token.service';
import {UserLogin} from '@app/store/auth/interfaces';
import {RouteService} from '@app/store/initialData/route.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private routeService: RouteService,
    private tokenService: TokenService,
  ) {
  }

  loginUser(userLoginData: UserLogin): Observable<any> {
    const route = this.routeService.getRoutesByName('auth.login');
    return this.http.post(route, userLoginData, {headers: this.tokenService.getHeaders(false)});
  }
}
