import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage?: number): string {
    if (discountPercentage && discountPercentage > 0) {
      const discountedPrice = price - 2;
      return ` EGP ${discountedPrice} `;
    }
    return `Price: ${price}`;
  }
}
