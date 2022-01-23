import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letracapital'
})
export class LetracapitalPipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();

    let letters = value.split(' ');

    if (all) {
      for (let i in letters) {
        letters[i] = letters[i][0].toUpperCase() + letters[i].substring(1);
      }
    } else {
      letters[0] = letters[0][0].toUpperCase() + letters[0].substring(1);
    }

    return letters.join(' ');
  }

}
