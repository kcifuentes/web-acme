import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CatchErrorsPipe} from '@app/pipes/catch-errors/catch-errors.pipe';


@NgModule({
    declarations: [CatchErrorsPipe],
    exports: [CatchErrorsPipe],
    imports: [
        CommonModule
    ]
})
export class CatchErrorsModule {
}
