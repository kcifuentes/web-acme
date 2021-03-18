import { Directive } from '@angular/core';

@Directive({
  selector: '[acmePageLayoutHeader],acme-page-layout-header',
  host: {
    class: 'acme-page-layout-header'
  }
})
export class PageLayoutHeaderDirective {

  constructor() { }

}

