import { Directive } from '@angular/core';

@Directive({
  selector: '[acmePageLayoutContent],acme-page-layout-content',
  host: {
    class: 'acme-page-layout-content'
  }
})
export class PageLayoutContentDirective {

  constructor() { }

}
