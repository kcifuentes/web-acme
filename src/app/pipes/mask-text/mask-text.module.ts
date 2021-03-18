import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskTextPipe} from '@app/pipes/mask-text/mask-text.pipe';


@NgModule({
    declarations: [
        MaskTextPipe,
    ],
    exports: [MaskTextPipe],
    imports: [
        CommonModule
    ]
})
export class MaskTextModule {
}
