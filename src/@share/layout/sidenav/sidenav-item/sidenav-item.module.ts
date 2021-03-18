import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IconModule } from '@visurel/iconify-angular';
import { SidenavItemComponent } from './sidenav-item.component';

@NgModule({
  declarations: [SidenavItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule,
    IconModule,
    FlexLayoutModule,
  ],
  exports: [SidenavItemComponent]
})
export class SidenavItemModule {
}
