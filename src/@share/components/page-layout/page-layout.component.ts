import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'acme-page-layout',
  template: '<ng-content></ng-content>',
  host: {
    class: 'acme-page-layout'
  },
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {

  @Input() mode: 'card' | 'simple' = 'simple';

  constructor() {
  }

  @HostBinding('class.acme-page-layout-card')
  get isCard() {
    return this.mode === 'card';
  }

  @HostBinding('class.acme-page-layout-simple')
  get isSimple() {
    return this.mode === 'simple';
  }

}
