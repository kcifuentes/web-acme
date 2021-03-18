import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {LayoutModule} from '@share/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'legacy',
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class ShareModule {
}
