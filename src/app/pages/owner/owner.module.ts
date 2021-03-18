import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {OwnerRoutingModule} from '@app/pages/owner/owner-routing.module';
import {OwnerComponent} from '@app/pages/owner/owner.component';
import {BreadcrumbsModule} from '@share/components/breadcrumbs/breadcrumbs.module';
import {PageLayoutModule} from '@share/components/page-layout/page-layout.module';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [OwnerComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    BreadcrumbsModule,
    MatButtonToggleModule,
    PageLayoutModule,
    ReactiveFormsModule,
    FlexModule,
  ]
})
export class OwnerModule {
}
