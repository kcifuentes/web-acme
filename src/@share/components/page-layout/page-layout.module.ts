import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLayoutContentDirective } from './page-layout-content.directive';
import { PageLayoutHeaderDirective } from './page-layout-header.directive';
import { PageLayoutComponent } from './page-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageLayoutComponent, PageLayoutHeaderDirective, PageLayoutContentDirective],
  exports: [PageLayoutComponent, PageLayoutHeaderDirective, PageLayoutContentDirective]
})
export class PageLayoutModule {
}
