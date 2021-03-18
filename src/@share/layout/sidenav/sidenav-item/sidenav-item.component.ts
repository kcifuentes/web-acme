import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Router} from '@angular/router';
import icKeyboardArrowRight from '@iconify/icons-ic/twotone-keyboard-arrow-right';
import {UntilDestroy} from '@ngneat/until-destroy';
import {NavigationItem, NavigationLink} from '@share/interfaces/navigation-item.interface';
import {NavigationService} from "@share/services/navigation.service";


@UntilDestroy()
@Component({
  selector: 'acme-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent implements OnInit, OnChanges {

  @Input() item: NavigationItem;
  @Input() level: number;
  isOpen: boolean;
  isActive: boolean;
  icKeyboardArrowRight = icKeyboardArrowRight;

  isLink = this.navigationService.isLink;
  isDropdown = this.navigationService.isDropdown;
  isSubheading = this.navigationService.isSubheading;

  constructor(private router: Router,
              private cd: ChangeDetectorRef,
              private navigationService: NavigationService
  ) {
  }

  @HostBinding('class')
  get levelClass() {
    return `item-level-${this.level}`;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.cd.markForCheck();
  }

  isFunction(prop: NavigationLink['route']) {
    return prop instanceof Function;
  }
}
