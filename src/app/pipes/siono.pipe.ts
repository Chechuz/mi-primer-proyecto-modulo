import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siono'
})
export class SionoPipe implements PipeTransform {

  transform(value: boolean): string {
      if (value) return 'Si';
    return 'No';
  }

}
