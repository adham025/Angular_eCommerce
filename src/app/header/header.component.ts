import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AddToCartService } from '../service/cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartProducts : Product[] = [];
  constructor(private _AddToCartService : AddToCartService) {}
  ngOnInit() {
    this._AddToCartService.getCart().subscribe({
    next:(result) => {
    this.cartProducts = result
      console.log("hello", this.cartProducts)
    }});
  }
}
