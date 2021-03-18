import {HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from '@app/pages/home/home.module';
import {RouteProvider, routeProviderFactory} from '@app/providers';
import {BCryptServiceService} from '@app/services/bcrypt-service.service';
import {STORE_IMPORTS} from '@app/utils';
import {ShareModule} from '@share/share.module';
import {ToastrModule} from 'ngx-toastr';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

export const TOAST_CONF = [
  ToastrModule.forRoot({
    closeButton: true,
    progressBar: true,
    tapToDismiss: true,
    enableHtml: true,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    resetTimeoutOnDuplicate: true,
    includeTitleDuplicates: true,
  }),
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...STORE_IMPORTS,
    ...TOAST_CONF,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,

    ShareModule,
  ],
  providers: [
    RouteProvider,
    BCryptServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: routeProviderFactory, deps: [RouteProvider], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
