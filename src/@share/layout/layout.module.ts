import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from '@share/layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatButtonModule} from "@angular/material/button";
import {ScrollbarModule} from "@share/components/scrollbar/scrollbar.module";
import {MatIconModule} from "@angular/material/icon";
import {IconModule} from "@visurel/iconify-angular";
import {SidenavItemModule} from "@share/layout/sidenav/sidenav-item/sidenav-item.module";

@NgModule({
  declarations: [LayoutComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    ScrollbarModule,
    MatIconModule,
    IconModule,
    SidenavItemModule,
  ],
  exports: [LayoutComponent, SidenavComponent]
})
export class LayoutModule {
}
