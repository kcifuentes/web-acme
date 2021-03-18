import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HomeComponent} from '@app/pages/home/home.component';
import {LayoutModule} from '@share/layout/layout.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LayoutModule,
  ]
})
export class HomeModule {
}
