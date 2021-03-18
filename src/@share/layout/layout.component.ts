import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {LayoutService} from "@share/services/layout.service";
import {MatSidenav} from "@angular/material/sidenav";

@UntilDestroy()
@Component({
  selector: 'acme-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @Input() sidenavRef: TemplateRef<any>;
  @Input() toolbarRef: TemplateRef<any>;
  @Input() footerRef: TemplateRef<any>;
  @Input() quickPanelRef: TemplateRef<any>;

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  isDesktop$ = this.layoutService.isDesktop$;

  events: string[] = [];
  opened: true;

  constructor(private layoutService: LayoutService) {
  }


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.layoutService.sidenavOpen$.pipe(
      untilDestroyed(this)
    ).subscribe(open => open ? this.sidenav.open() : this.sidenav.close());
  }

}
