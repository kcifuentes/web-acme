import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '@app/services/token.service';
import {RouteService} from '@app/store/initialData';
import {ProfileInterface} from '@app/store/profile/interfaces/profile.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private http: HttpClient,
    private routeService: RouteService,
    private tokenService: TokenService
  ) {
  }

  saveProfile(payload: ProfileInterface): Observable<any> {
    const route = this.routeService.getRoutesByName('profiles.save');
    return this.http.post(route, payload, {headers: this.tokenService.getHeaders(false)});
  }

  getAllProfiles(payload: { profileTypeId: number }): Observable<any> {
    const route = this.routeService.getRoutesByName('profiles.index');
    const params = new HttpParams().set('profile_type_id', payload.profileTypeId.toString());

    return this.http.get(route, {headers: this.tokenService.getHeaders(false), params});
  }
}
