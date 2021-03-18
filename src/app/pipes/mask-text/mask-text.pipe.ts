import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maskText'
})
export class MaskTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/^(.)(.*)(.{3}@.*)$/,
      (_, a, b, c) => a + b.replace(/./g, '*') + c
    );
  }
}
