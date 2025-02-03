import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number): string {
    const roundedRating = Math.ceil(value);

    let stars = '';
    for (let i = 0; i < roundedRating; i++) {
      stars += '⭐';

    }

    return stars;
  }

}
