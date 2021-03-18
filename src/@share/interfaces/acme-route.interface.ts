import {Route} from '@angular/router';

export interface AcmeRouteData {
  scrollDisabled?: boolean;
  toolbarShadowEnabled?: boolean;
  containerEnabled?: boolean;

  [key: string]: any;
}

export interface AcmeRoute extends Route {
  data?: AcmeRouteData;
  children?: AcmeRoute[];
}

export type VexRoutes = AcmeRoute[];
