import {AfterContentInit, Component, ElementRef, Input, NgZone, OnDestroy} from '@angular/core';
import SimpleBar from 'simplebar';

@Component({
  selector: 'acme-scrollbar',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./scrollbar.component.scss'],
  host: {
    class: 'acme-scrollbar'
  },
})
export class ScrollbarComponent implements AfterContentInit, OnDestroy {

  @Input() options: Partial<any>;

  scrollbarRef: SimpleBar;

  constructor(private _element: ElementRef,
              private zone: NgZone) {
  }

  ngAfterContentInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new SimpleBar(this._element.nativeElement, this.options);
    });
  }

  ngOnDestroy(): void {
    if (this.scrollbarRef && (this.scrollbarRef as any).unMount) {
      (this.scrollbarRef as any).unMount();
    }
  }
}
