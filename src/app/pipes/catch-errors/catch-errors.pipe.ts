import {Pipe, PipeTransform} from '@angular/core';
import {ErrorItemInterface} from '@app/interfaces/error.interface';

@Pipe({
    name: 'catchErrors'
})
export class CatchErrorsPipe implements PipeTransform {
    transform(value: string, errors: ErrorItemInterface[]): string {
        return errors.find((error) => error.type === value)?.text;
    }
}
