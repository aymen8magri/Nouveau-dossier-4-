import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'immatriculation',
  standalone: true
})
export class ImmatriculationPipe implements PipeTransform {

  transform(immatriculation: string): string {
    return immatriculation.slice(0, 3) + ' ' + immatriculation.slice(3, 5) + ' ' + immatriculation.slice(5);
  }

}
