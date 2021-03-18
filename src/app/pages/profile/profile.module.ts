import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ProfileCreateUpdateModule} from '@app/pages/profile/profile-create-update/profile-create-update.module';
import {ProfileRoutingModule} from '@app/pages/profile/profile-routing.module';
import {ProfileComponent} from '@app/pages/profile/profile.component';
import {BreadcrumbsModule} from '@share/components/breadcrumbs/breadcrumbs.module';
import {PageLayoutModule} from '@share/components/page-layout/page-layout.module';
import {IconModule} from '@visurel/iconify-angular';
import {TableComponent} from './table/table.component';


@NgModule({
  declarations: [ProfileComponent, TableComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BreadcrumbsModule,
    MatButtonToggleModule,
    PageLayoutModule,
    ReactiveFormsModule,
    FlexModule,
    ExtendedModule,
    IconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatCheckboxModule,
    ProfileCreateUpdateModule,
  ]
})
export class ProfileModule {
}
