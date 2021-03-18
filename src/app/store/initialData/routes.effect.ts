import {Injectable} from '@angular/core';
import {RouteService} from '@app/store/initialData/route.service';
import {GetRoutes, GetRoutesSuccess, RoutesActionTypes} from '@app/store/initialData/routes.action';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {ToastrService} from 'ngx-toastr';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class RoutesEffect {
    @Effect()
    GetRoutes$: Observable<Action> = this.actions$.pipe(
        ofType(RoutesActionTypes.GET_ROUTES),
        map((action: GetRoutes) => action),
        mergeMap(() => {
            return this.routeService.getRoutesFromApi().pipe(
                mergeMap((response: any) => {
                    return [
                        new GetRoutesSuccess({routes: response}),
                    ];
                }),
                catchError((err: any) => {
                    this.toast.error(err.error.message, '!Error¡', {
                        enableHtml: true
                    });

                    return of({type: 'NO_ACTION'});
                })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private routeService: RouteService,
        private toast: ToastrService,
    ) {
    }
}
