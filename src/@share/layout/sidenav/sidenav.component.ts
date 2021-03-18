import {Component, Input, OnInit} from '@angular/core';
import icLayers from '@iconify/icons-ic/twotone-layers';
import {NavigationItem} from '@share/interfaces/navigation-item.interface';
import {LayoutService} from '@share/services/layout.service';
import {trackByRoute} from "@share/utils/track-by";
import icContacts from '@iconify/icons-ic/twotone-contacts';

@Component({
  selector: 'acme-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
  trackByRoute = trackByRoute;
  @Input() collapsed: boolean;
  items: NavigationItem[] = [
    {
      type: 'link',
      label: 'Propietarios',
      route: '/owners',
      icon: icLayers,
      routerLinkActiveOptions: {exact: true}
    },
  ];

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
}
